const express=require("express");
const cors=require("cors");
const app=express();
const login=require("../backend/routes/users/users_login");
const CommunityCreation=require("../backend/routes/admin/create_community");
const joinCommunity=require("../backend/routes/users/join_community");
const myCommunity=require("./routes/users/my_community");
const getSchema=require("./routes/admin/dynamic_schema_fetch");

// console.log(admin.name);
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Include OPTIONS
    allowedHeaders: ["Content-Type", "token"], // Allow custom headers like 'token'
    optionsSuccessStatus: 200,
  }));
app.use(express.json());
app.use("/user", login);
app.use("/admin/createCommunity",CommunityCreation);
app.use("/join_community",joinCommunity);
app.use("/myCommunity", myCommunity);
app.use("/getSchema", getSchema);

app.listen(5001,()=>{
    console.log('listening on port 5001');
})