const express = require("express");
const db = require("./db/DBConnection");
const router = express.Router();

//setting up an routers
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/theme1', (req, res) => {
    res.render('theme-1/theme1'); 
});

router.get('/comming', (req, res) => {
    res.render('comming-soon/comming-soon'); 
});

router.get('/explore', (req, res) => {
    res.render('explore/explore'); 
});

//save resume depending on the themename variable
//make entry according to the themename table in database
router.post("/resume/save/:themeid", async (req, res) => {
    try {
        var data = [
            req.body.themeid,
            req.body.name,
            req.body.email,
            req.body.mobile_no,
            req.body.website,
            req.body.github,
            req.body.position,
            req.body.address,
            req.body.experience_position,
            req.body.company,
            req.body.experience_from_date,
            req.body.experience_to_date,
            req.body.point_1,
            req.body.point_2,
            req.body.point_3,
            req.body.point_4,
            req.body.college,
            req.body.degree,
            req.body.education_from_date,
            req.body.education_to_date,
            req.body.second_college_name,
            req.body.second_college_degree,
            req.body.second_college_from_date,
            req.body.second_college_to_date,
            req.body.skill_1,
            req.body.skill_2,
            req.body.skill_3,
            req.body.skill_4,
            req.body.skill_5,
            req.body.skill_6,
            req.body.skill_1_rating,
            req.body.skill_2_rating,
            req.body.skill_3_rating,
            req.body.skill_4_rating,
            req.body.skill_5_rating,
            req.body.skill_6_rating,
            req.body.interest,
            req.body.dob,
            req.body.place
        ];      

        //make entry according to the themename variable into table
        var themeInsertQuery = 'INSERT INTO '+req.params.themeid+' (themeid,name, email, mobile_no, website, github, position, address, exprience_position, company, experience_from_date, experience_to_date, point_1, point_2, point_3, point_4, college, degree, education_from_date, education_to_date, second_college_name, second_college_degree, second_college_from_date, second_college_to_date, skill_1, skill_2, skill_3, skill_4, skill_5, skill_6, skill_1_rating, skill_2_rating, skill_3_rating, skill_4_rating, skill_5_rating, skill_6_rating, interest, dob, place) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        db.query(themeInsertQuery, data, (err, result) => {
            if (err) {
                res.json({
                    code: 1,
                    head: "Failed to saved!",
                    msg: "Please try again after sometime." 
                });
            } else {
                res.json({
                    code: 0,
                    head: "Resume saved successfully!",
                    msg: "Congratulations! Your resume is online now.",
                    themeid: data[0]
                });
            }
        }); 
    } catch (error) {
        res.redirect("/");
    }
});

router.get("/resume/show", (req, res) => {
    res.render("theme-1/show-theme1"); 
});

//get mapping to show resume according to the database
router.get("/resume/:themename/:themeid", (req, res) => {
    try {
        console.log(req.params.themename + " " + req.params.themeid);
        // find the theme and their related data into that table
        var findTheme = 'SELECT * FROM ' + req.params.themename + ' WHERE themeid=?';
        
        db.query(findTheme, [req.params.themeid], (err, result) => {
           if (err) {
               console.log(err);
               res.redirect("/");
           } else {
               console.log(result);
               if (result > 0) {
                   res.render("theme-1/show-theme1");
               }
               // if no theme data found then redirect to the homepage
               if (result.length === 0) {
                   res.redirect("/");
               }
           }
        });

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;