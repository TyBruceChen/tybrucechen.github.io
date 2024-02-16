<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="refresh" 
            content="0;url=https://tychence.wordpress.com/"/>
        
        <title>Tianyi Chen's Introduction HTML Webpage in CS212</title>
    </head>
    <body>
        <h1>Tianyi Chen (CS212 Homework)</h1><hr>
        <nav>
            <ul type="circle">
                <li><a href="index.html#Role-or-Aspiration">Role or Aspiration</a></li>
                <li><a href="index.html#Introduction">Introduction</a></li>
                <li><a href="index.html#Skills">Skills</a></li>
                <li><a href="index.html#Project">Project</a></li>
                <li><a href="index.html#Education">Education</a></li>
                <li><a href="index.html#Contact-Info">Contact Info</a></li>
            </ul>
        </nav>
        <section id="Role-or-Aspiration">
        <h4>Role or Aspiration: </h4>   <!-- sub-section heading -->
        <p>I think web programming is crucial to my future career and capstone project success.</p>
        <hr>
        </section>

        <section id="Introduction">
        <h4>Introduction:</h4>
        <p>Hi there! I'm Tianyi Chen, you can call me Bruce. I am a computer engineering student. My academic interests falls into artifacial intelligence (machine learning and computer vision), as well as Internet of things. I am a tranferred student from China and this is the first and last year I stay in NAU. My personal intersts is video games and Japan animation.
        <br>    <!--break line-->
        I take this class because I sincerely want to have a systematic learning of HTML,CSS, JavaScript, SQL to host a website and handle useful web programming tools and techniques.
        </p><br>
        <object data="https://tychence.files.wordpress.com/2024/01/tianyichen_cv.pdf" type="application/pdf" width="550" height="100%"><p>This is my Resume</p></object><br>
        <a href="https://tychence.files.wordpress.com/2024/01/tianyichen_cv.pdf" download="Tianyi_Chen_CV">Click Here to Download My CV</a>
        <hr>    <!-- horizontal line element-->
        </section>

        <section id="Skills">
        <h4>Skills:</h4>
        <p>
            <ul>
                <li>Machine learning related programming with Python</li>    <!--Italic font-->
                <li>IoT programming</li>
                <li>C Program</li>
                <li>Circuit board design</li>
                <li>Verilog programming on FPGA</li>
                <li>Linux OS</li>
                <li>LateX writing</li>
            </ul>
            <hr>
        </p>
        </section>

        <section id="Project">
        <h4>Project Showcase:</h4>
        <p>
            <em><b>AI-Telehealth</b></em><br>  <!--emphasize element-->
            In this project, we used the fine-tuned vision tranformer model which has the same structure as the prevalent language models to diagnosis COVID-19 deases based on the Chest X-ray. To guarantee the data transmission safety between server and clients, we used homomorphic encryption to encrypt the data. I mainly focused AI diagnosing programming part and my teammate was mainly in charge of encryption part. If you're interested are capstone project, please visit 
            <a href="https://sites.google.com/nau.edu/ai-telehealth/home">here</a> and pay a visit to the future presentation festival!
        </p>
        <img src="https://tychence.files.wordpress.com/2024/02/engineering-festival.jpg" alt="This is the picture of winning thrid prize in NAU Engineering Fest" width="400" height="100%"/><br>
        <br>
        <p>
            <em><b>FPGA Alamr Platform</b></em><br>
            In this project, I use Cyclone-V core Intel FPGA, coupled with ESP8266 to build a alarm platform which can send alarm information to the specific website with time, light strength and temperature information. For more information, please click <a href="https://tychence.wordpress.com/fpga-alarm-platform-with-esp8266/">here</a>.
        </p>
        <img src="https://tychence.files.wordpress.com/2023/03/img_20221108_144455.jpg" alt="This is the picture of FPGA alarm plaform project" width="400" height="100%"/>
        <hr>    <!-- hyper link element-->
        </section>

        <section id="Education">
        <h4>Education and Experience:</h4>
        <table border="1">
            <thead>
                <tr>
                    <th>Place</th>
                    <th>Duration</th>
                    <th>Degree</th>
                    <th>Major</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chonqing University of Posts and Telecommunications</td>
                    <td>Sep,2020 - June,2023</td>
                    <td rowspan="2">Bachelor of Science</td>
                    <td>Eletronic Information Engineering</td>
                    <td rowspan="2">In Progress</td>
                </tr>
                <tr>
                    <td>Northern Arizona University</td>
                    <td>Aug,2023 - May,2024</td>
                    <td>Computer Engineering</td>
                </tr>
            </tbody>
            <tfoot>
                <td colspan="5">
                    For more information please visit <a href="https://tychence.wordpress.com/">my personal site</a>.
                </td>
            </tfoot>
        </table>
        </section>

        <section id="Contact-Info">
        <h4>Contact Info:</h4>
        <a href="mailto:tc922@nau.edu">tc922@nau.edu</a><br>
        <a href="https://github.com/TyBruceChen">GitHub Profile</a><br> https://tychence.wordpress.com/
        <a href="https://tychence.wordpress.com/">Personal Site</a>
        </section>

    </body>
</html>
