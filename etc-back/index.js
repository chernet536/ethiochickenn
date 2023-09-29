const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const Post = require('./models/Post');
const Job = require('./models/Jobs');
const bcrypt = require('bcryptjs');
const app = express();

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
const secret2 = 'asfe45we45w345wegw345werjktjwertkj';

app.use(cors({credentials:true,origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static(__dirname + '/uploads'));

mongoose.connect('mongodb+srv://blog:0SpHNTP3hrxu0R3z@cluster0.3hmy24o.mongodb.net/');

app.post('/register', async (req,res) => {
  const {username,password} = req.body;
  try{
    const userDoc = await User.create({
      username,
      password:bcrypt.hashSync(password,salt),
    });
    res.json(userDoc);
  } catch(e) {
    console.log(e);
    res.status(400).json(e);
  }
});

app.post('/login', async (req,res) => {
  const {username,password} = req.body;
  const userDoc = await User.findOne({username});
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    // logged in
    jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json('wrong credentials');
  }
});

app.get('/profile', (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err,info) => {
    if (err) throw err;
    res.json(info);
  });
});

app.post('/logout', (req,res) => {
  res.cookie('token', '').json('ok');
});

app.post('/post', uploadMiddleware.single('file'), async (req,res) => {
  const {originalname,path} = req.file;
  const parts = originalname.split('.');
  const ext = parts[parts.length - 1];
  const newPath = path+'.'+ext;
  fs.renameSync(path, newPath);

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
    const {title,summary,content} = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover:newPath,
      author:info.id,
    });
    res.json(postDoc);
  });

});

app.put('/post',uploadMiddleware.single('file'), async (req,res) => {
  let newPath = null;
  if (req.file) {
    const {originalname,path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    newPath = path+'.'+ext;
    fs.renameSync(path, newPath);
  }

  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
    const {id,title,summary,content} = req.body;
    const postDoc = await Post.findById(id);
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json('you are not the author');
    }
    await postDoc.updateOne({
      title,
      summary,
      content,
      cover: newPath ? newPath : postDoc.cover,
    });

    res.json(postDoc);
  });

});

app.get('/post', async (req,res) => {
  res.json(
    await Post.find()
      .populate('author', ['username'])
      .sort({createdAt: -1})
    
      .limit(3)
  );
});

app.get('/newspost', async (req,res) => {
  res.json(
    await Post.find()
      .populate('author', ['username'])
      .sort({createdAt: -1})
    
      .limit(10)
  );
});




app.delete('/post/:id', async(req, res)=>{
 

  try {
    const {id} = req.params;
    const deletepost = await Post.findByIdAndDelete({_id:id})
 
    console.log(deletepost);
    res.status(201).json(deletepost);

} catch (error) {
    res.status(422).json(error);
}
  
  
});

app.get('/post/:id', async (req, res) => {
  const {id} = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']);
  res.json(postDoc);
})
app.get('/newspost/post/:id', async (req, res) => {
  const {id} = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']);
  res.json(postDoc);
})



//Job vacancy on index
app.post('/vacancy', async (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
    const {title,description,deadline} = req.body;
    const jobDoc = await Job.create({
      title,
      description,
      deadline,
      author:info.id,
    });
    res.json(jobDoc);
  });

});

app.put('/vacancy', async (req,res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
    const {id,description,deadline} = req.body;
    const jobDoc = await Job.findById(id);
    const isAuthor = JSON.stringify(jobDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json('you are not the author');
    }
    await jobDoc.updateOne({
      title,
      description,
      deadline,
      
    });

    res.json(jobDoc);
  });

});



app.get('/vacancy', async (req,res) => {
  res.json(
    await Job.find()
      .populate('author', ['username'])
      .sort({createdAt: -1})
    
      .limit(10)
  );
});




app.delete('/jobs/:id', async(req, res)=>{
 

  try {
    const {id} = req.params;
    const deleteJob = await Job.findByIdAndDelete({_id:id})
 
    console.log(deleteJob);
    res.status(201).json(deleteJob);

} catch (error) {
    res.status(422).json(error);
}
  
  
});

app.get('/vacancy/:id', async (req, res) => {
  const {id} = req.params;
  const jobDoc = await Job.findById(id).populate('author', ['username']);
  res.json(jobDoc);
})
app.get('/vacancy/job/:id', async (req, res) => {
  const {id} = req.params;
  const jobDoc = await Job.findById(id).populate('author', ['username']);
  res.json(jobDoc);
})

// check

//check

// new code for job.

const { Schema } = mongoose;

const jobPostSchema = new Schema({
  title: String,
  description: String,
  location: String,
  JobDetail: String,
  author: { type: Schema.Types.ObjectId, ref: 'User' }
});

const JobPost = mongoose.model('JobPost', jobPostSchema);

// Get all job posts
app.get('/api/job-posts', async (req, res) => {
  try {
    const jobPosts = await JobPost.find();
    res.json(jobPosts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve job posts' });
  }
});


app.get('/api/job-posts/:id', async (req, res) => {
  const { id } = req.params;
  const jobPost = await JobPost.findById(id).populate('JobDetail');
  res.json(jobPost);
});

// get specific
app.get('/api/job-posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const jobPost = await JobPost.findById(id);
    
    if (!jobPost) {
      return res.status(404).json({ error: 'Job post not found' });
    }

    const jobDetail = await JobDetail.findById(jobPost.jobDetail);
    
    if (!jobDetail) {
      return res.status(404).json({ error: 'Job detail not found' });
    }

    res.json(jobDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//fetch fill form and update
app.get("/api/job-posts/:id", (req, res) => {
  const jobId = req.params.id;

  // Find the job post by ID in the database
  JobPost.findById(jobId, (err, jobPost) => {
    if (err) {
      console.log(err);
      res.status(500).json({ error: "Failed to fetch job post" });
    } else {
      if (!jobPost) {
        res.status(404).json({ error: "Job post not found" });
      } else {
        res.json(jobPost);
      }
    }
  });
});

// PUT request to update a specific job post




// PUT /api/job-posts/:id
app.put('/api/job-posts/:id', (req, res) => {
  const jobId = req.params.id;
  const { title, description, location, JobDetail } = req.body;

  // Find the job post by ID and update its values
  JobPost.findByIdAndUpdate(
    jobId,
    { title, description, location, JobDetail },
    { new: true } // Return the updated document
  )
    .then(updatedJobPost => {
      if (!updatedJobPost) {
        return res.status(404).json({ error: 'Job post not found' });
      }
      res.json(updatedJobPost);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to update job post' });
    });
});

// Route to handle fetching a specific job detail
/*
app.get('/api/job-posts/:jobPostId/job-details/:jobDetailId', async (req, res) => {
  const { jobPostId, jobDetailId } = req.params;

  try {
    // Find the job post by ID and populate the job details
    const jobPost = await JobPost.findById(jobPostId).populate('jobDetails');

    if (!jobPost) {
      return res.status(404).json({ error: 'Job post not found' });
    }

    // Find the specific job detail by ID within the job post's job details
    const jobDetail = jobPost.jobDetails.find(detail => detail._id.toString() === jobDetailId);

    if (!jobDetail) {
      return res.status(404).json({ error: 'Job detail not found' });
    }

    // Return the job detail as a JSON response
    res.json(jobDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}); 

// Route to handle fetching a specific job detail
app.get('/api/job-posts/:jobPostId/job-details/:jobDetailId', async (req, res) => {
  const { jobPostId, jobDetailId } = req.params;

  try {
    // Find the job post by ID and populate the job details
    const jobPost = await JobPost.findById(jobPostId).populate('jobDetails');

    if (!jobPost) {
      return res.status(404).json({ error: 'Job post not found' });
    }

    // Find the specific job detail by ID within the job post's job details
    const jobDetail = jobPost.jobDetails.find(detail => detail._id.toString() === jobDetailId);

    if (!jobDetail) {
      return res.status(404).json({ error: 'Job detail not found' });
    }

    // Return the job detail as a JSON response
    res.json(jobDetail);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
*/

// Create a new job post




app.post('/api/job-posts', async (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, async (err,info) => {
    if (err) throw err;
    const {title,description,location,JobDetail} = req.body;
    const jobPosts = await  JobPost.create({
      title,
      description,
      location,
      JobDetail,
      author:info.id,
    });
    res.json(jobPosts);
  });
});
/*

 try {
    const { title, description, location, JobDetail,author: { id }, } = req.body;
    const newJobPost = new JobPost({ title, description, location, JobDetail });
    await newJobPost.save();
    res.json(newJobPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job post' });
  }
});


*/

// Update a job post
app.put('/api/job-posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, location } = req.body;
    const updatedJobPost = await JobPost.findByIdAndUpdate(
      id,
      { title, description, location },
      { new: true }
    );
    res.json(updatedJobPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update job post' });
  }
});

// Delete a job post
app.delete('/api/job-posts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await JobPost.findByIdAndDelete(id);
    res.json({ message: 'Job post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete job post' });
  }
});

//
app.listen(4000);




