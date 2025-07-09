const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Home route
app.get("/", (req, res) => {
  res.send("✅ Backend is running! Hello Maahin!");
});

// ======================
// Dummy Session Data
// ======================
const sessionHistory = [
  {
    id: "#NS-2025-011",
    date: "June 21, 2025",
    time: "08:42 PM",
    duration: "12 mins 48 sec",
    participant: "TestSubject001",
  },
  {
    id: "#NS-2025-010",
    date: "June 20, 2025",
    time: "07:15 PM",
    duration: "10 mins 30 sec",
    participant: "Subject_A",
  },
  {
    id: "#NS-2025-009",
    date: "June 19, 2025",
    time: "05:50 PM",
    duration: "14 mins 02 sec",
    participant: "Participant_9",
  },
  {
    id: "#NS-2025-008",
    date: "June 18, 2025",
    time: "06:00 PM",
    duration: "11 mins 27 sec",
    participant: "NeuroTest_44",
  },
  {
    id: "#NS-2025-007",
    date: "June 17, 2025",
    time: "09:18 AM",
    duration: "9 mins 10 sec",
    participant: "TestAlphaX",
  },
];

// GET: /session/history
app.get("/session/history", (req, res) => {
  res.json(sessionHistory);
});

// POST: /session/start
app.post("/session/start", (req, res) => {
  const newSession = {
    id: `#NS-2025-00${sessionHistory.length + 1}`,
    date: req.body.date,
    time: req.body.time,
    duration: req.body.duration,
    participant: req.body.participant,
  };

  sessionHistory.push(newSession);
  res.status(201).json({
    message: "✅ New session started!",
    session: newSession,
  });
});

// TEMP GET: /session/start (for browser test only)
app.get("/session/start", (req, res) => {
  res.send("🚧 This route only accepts POST data. Use React or Postman to send JSON.");
});

// ======================
// Dummy User Profile
// ======================
let userProfile = {
  id: 1,
  name: "Muhammad Maahin",
  email: "maahin@example.com",
  age: 22,
  focusGoal: "Deep work for 30 mins"
};

// GET: /user/profile
app.get("/user/profile", (req, res) => {
  res.json(userProfile);
});

// PUT: /user/profile (Update)
app.put("/user/profile", (req, res) => {
  const updatedProfile = req.body;

  userProfile = {
    ...userProfile,
    ...updatedProfile,
  };

  res.json({
    message: "✅ Profile updated successfully!",
    profile: userProfile,
  });
});

// ======================
// Start Server
// ======================
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
