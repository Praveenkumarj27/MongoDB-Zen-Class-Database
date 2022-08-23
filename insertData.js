
/*inserting users*/

db.users.insertMany([
    {
      userid: 1,
      name: "Praveenkumar",
      email: "praveen@gmail.com",
      mentorid: 1,
    },
    {
      userid: 2,
      name: "Gokulakrishnan",
      email: "gokul@gmail.com",
      mentorid: 2,
    },
    {
      userid: 3,
      name: "Bharathkumar",
      email: "bharath@gmail.com",
      mentorid: 3,
    },
    {
      userid: 4,
      name: "Ranjithkumar",
      email: "ranjith@gmail.com",
      mentorid: 1,
    },
    {
      userid: 5,
      name: "Navaneethan",
      email: "navaneeth@gmail.com",
      mentorid: 2,
    },
  ]);
  /*.............................................................................................................................................*/
  /*codekata*/
  
  db.codekata.insertMany([
    {
      userid: 1,
      problems: 30,
    },
    {
      userid: 2,
      problems: 40,
    },
    {
      userid: 3,
      problems: 60,
    },
    {
      userid: 4,
      problems: 50,
    },
    {
      userid: 5,
      problems: 70,
    },
  ]);
  
  /*....................................................................................................................................................*/
  /*topics*/
  
  db.topics.insertMany([
    {
      topicid: 1,
      topic: "html",
      topic_date: new Date("4-nov-2021"),
    },
    {
      topicid: 2,
      topic: "css",
      topic_date: new Date("10-nov-2021"),
    },
    {
      topicid: 3,
      topic: "Javascript",
      topic_date: new Date("15-nov-2021"),
    },
    {
      topicid: 4,
      topic: "React",
      topic_date: new Date("20-nov-2021"),
    },
    {
      topicid: 5,
      topic: "NodeJs",
      topic_date: new Date("25-nov-2021"),
    },
  ]);
  
  /*..............................................................................................................................................................*/
  /*tasks*/
  
  db.tasks.insertMany([
    {
      taskid: 1,
      topicid: 1,
      userid: 1,
      task: "html task",
      due_date: new Date("4-nov-2021"),
      submitted: true,
    },
    {
      taskid: 2,
      topicid: 2,
      userid: 2,
      task: "css task",
      due_date: new Date("10-nov-2021"),
      submitted: true,
    },
    {
      taskid: 3,
      topicid: 3,
      userid: 3,
      task: "Javascript task",
      due_date: new Date("15-nov-2021"),
      submitted: false,
    },
    {
      taskid: 4,
      topicid: 4,
      userid: 4,
      task: "React task",
      due_date: new Date("20-nov-2021"),
      submitted: false,
    },
    {
      taskid: 5,
      topicid: 5,
      userid: 5,
      task: "Node task",
      due_date: new Date("25-nov-2021"),
      submitted: false,
    },
  ]);
  /*....................................................................................................................................................*/
  /*attendance*/
  
  db.attendance.insertMany([
    {
      userid: 1,
      topicid: 1,
      attended: true,
    },
    {
      userid: 2,
      topicid: 2,
      attended: true,
    },
    {
      userid: 3,
      topicid: 3,
      attended: false,
    },
    {
      userid: 4,
      topicid: 4,
      attended: false,
    },
    {
      userid: 5,
      topicid: 5,
      attended: false,
    },
  ]);
  
  /*...................................................................................................................................................*/
  /*mentors*/
  
  db.mentors.insertMany([
    {
      mentorid: 1,
      mentorname: "Anuja",
      mentor_email: "anuja@gmail.com",
    },
    {
      mentorid: 2,
      mentorname: "Arul",
      mentor_email: "arul@gmail.com",
    },
    {
      mentorid: 3,
      mentorname: "Revathi",
      mentor_email: "revathi@gmail.com",
    },
    {
      mentorid: 4,
      mentorname: "Rudhra",
      mentor_email: "rudhra@gmail.com",
    },
    {
      mentorid: 5,
      mentorname: "Booma",
      mentor_email: "booma@gmail.com",
    },
  ]);
  
  /*.................................................................................................................................................*/
  /*company drives*/
  
  db.comapnydrives.insertMany([
    {
      userid: 1,
      drive_date: new Date("10-nov-2021"),
      company: "Google",
    },
    {
      userid: 1,
      drive_date: new Date("15-nov-2021"),
      company: "Amazon",
    },
    {
      userid: 2,
      drive_date: new Date("20-nov-2021"),
      company: "Zoho",
    },
    {
      userid: 3,
      drive_date: new Date("25-nov-2021"),
      company: "Mac App studio",
    },
    {
      userid: 4,
      drive_date: new Date("27-nov-2021"),
      company: "Freshworks",
    }
      
  ]);
