import CourseData from "./Types/CourseDataType"
import ActionType from "./Types/ActionTypeEnum";

const data : CourseData = {
  'Lesson 1 - Getting Started': {
    totalParagraphs: 0,
  },
  'Lesson 2 - Intro to Java - Variables': {
    'totalParagraphs': 20,
    'Introduction': {
      0: {
        actionType: ActionType.Read,
        content: <p>In Lesson 1, you got your Romi driving around and made a small code change. In this lesson,
        we’ll talk a little bit about Java as a programming language so you can start to make sense of all the
        folders and files you see in VSCode.</p>
      }
    },
    'Printing Output': {
      1: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson2_1.png'/>,
        content: <p>One of the simplest things you can do in Java is tell the program to output text. You can do this by calling one of two “methods”. We will talk about what a method is shortly, but for now just think of it as some piece of code can you “call”, or invoke, to do something. Java executes code starting at the top of the file, and then executes lines one by one from top to bottom of the file. So, inserting lines into a program will result in them being executed. The two methods to output text are:</p>
      },
      2: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson2_2.png'/>,
        content: <p>In both the method calls above, the text in quotation marks will be outputted. In the second one, a line break will be added to the end of the text. The only difference is the addition of “ln” (with a lowercase L) after “print”, which is abbreviation for “line”. So, in English, system-dot-out-dot-print, and system-dot-out-dot-print-line. You can add these lines of code to your Romi program and try them out for yourself. Open Main.java, which is in the same location as RobotContainer.java from the previous lesson (explorer-{">"}src-{">"}main-{">"}java-{">"}frc-{">"}robot) and scroll down to line 23. Here you can insert these lines. Make sure to put them before the line that says RobotBase.startRobot(Robot::new);. Here is an example:</p>
      },
      3: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson2_3.png'/>,
        content: <p>After you do this, you press F5 to run your program and click on the TERMINAL output window example shown below. (It will take a few seconds to compile and run. You do not need your Romi powered on to do this test. You may need to scroll up in the terminal window, but if you look closely, you will see your output text. Here’s the output from running the example above; you can see the difference between print and println because some of the outputs create new lines and some do not.)</p>
      },
      4: {
        actionType: ActionType.Code,
        content: <p>In general, you do not want to put code in the location where we put these output statements, so after you run your test and get it working, delete these lines. We will talk more about why this is later.</p>
      }
    },
    'Methods': {
      5: {
        actionType: ActionType.Read,
        content: <p>With the output statements above, you’ve added your first method calls. In Java and most other programming languages, complex programs are broken down into many smaller chunks of code by writing methods. While we used a built-in method with System.out.println, you can also write and call your own methods. Almost everything that happens in a Java program is a compilation of methods, because methods can call other methods. As an example of this, think about a laptop computer, when you turn it on. When it turns on, a lot of things need to happen – it needs to start powering its hardware, it loads its operating system, it turns on the screen, etc. – but you only push one button to make all of this happen. You can think of pushing the button as calling a method that turns on the computer. That method might call some of sub-methods, for example one to power the hardware, one to load the operating system, and so forth. The code to do each of these individual tasks is localized in their own methods, and the person calling the method (in this case you, when you power on the machine) doesn’t really care about how those things work, you just call the method by pushing the power button and everything works. Methods are a critical building block of programs because they allow code to be re-used – the code to, for example, open a web browser window might be called when you click on the browser icon on your desktop, but also if you click a link in this document and it opens a window on its own. In both cases, a method to open a browser window was called, but the person programming that functionality only had to write that method once – they did not have to re-write it for every possible way to open a browser window.</p>
      }
    },
    'Variables': {
      6: {
        actionType: ActionType.Read,
        content: <p>We’ll talk more about methods in a bit, but before we do that, let’s talk about another concept called a “variable”. A variable is some value that exists in your program that has a name and can be changed and used. For example, you could have a variable called “robotSpeed” that represents the current speed of your Romi in inches per second. Since the Romi has encoders on the drive motors, which measure the rate of rotation, you could do some math to determine the current speed at which the wheels are spinning, and then store that value in robotSpeed. Then you could do something like outputting the speed to the terminal using System.out.println (SOP) and get a real-time update of your robot’s speed. You could even write a method that does all of this for you!</p>
      },
      7: {
        actionType: ActionType.Read,
        content: <p>Variables have different data types. For example a data could be an integer, in Java called an int, or it could be a decimal, which in Java could be called a double. There are other ways to represent these numbers in Java, but for now we’ll focus on int and double.</p>
      },
      8: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson2_8.png'/>,
        content: <p>To create, or declare, a variable you give it a name and a data type. In Java you do this like so:</p>
      },
      9: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson2_9.png'/>,
        content: <p>You can assign values to variables using the assignment operator, which is an equal sign. If you’ve taken algebra in school, then you’ll be used to the equal sign meaning something slightly different – it signifies that two halves of an equation are, in fact, equal. In Java, it sets the first half of the equation equal to the second half. (If you haven’t had algebra yet, don’t worry about this comparison.) Here’s an example of assigning values to variable:</p>
      },
      10: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson2_10.png'/>,
        content: <p>You can also declare and initialize, or set a value, for a variable in a single line of code:</p>
      },
      11: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson2_11.png'/>,
        content: <p>Once variables exist, they can be changed. For example, a robot’s speed changes frequently during operation, so if you were to have a variable representing the robot’s speed, it would need to constantly updated. You do this the same way as you did when you assigned the variable’s value, using the equal sign. Here is a short sample program that declares and initializes two variables, outputs their values, and then updates one of them and outputs its value again. There are a couple important things to notice here. First, we’re declaring and initializing variables. Then we use SOP to output the values, but instead of a hardcoded text string, we’re using a variable when we call SOP. Then, we change the value of one of the variables and output it again. Also, we change between using print and println, when we want to have text on the same line vs using line breaks. Try writing this program for yourself in the same place in Main.java where you tested your SOP statements earlier.</p>
      },
      12: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson2_12.png'/>,
        content: <p>If you haven’t clicked the red square toward the top of your screen to stop your prior program from running yet, do so now. As mentioned in lesson 1, you’ll want to click the red square to stop the already-running program each time you want to deploy a code change, so keep that in mind going forward. Here is the output from that program in the terminal (again, you may need to scroll up to see it):</p>
      },
      13: {
        actionType: ActionType.Code,
        content: <p>The last thing you might notice about this short program is that on line 32, there is text in green that reads as an English sentence, not Java code. The line is prefaced by two forward slashes - //. Putting two forward slashes in a line indicates that the rest of that line is a comment – Java will ignore it, so you can type whatever you want without causing an error. This is a helpful tool for writing text that explains what the code does, for humans to read. We’ll talk more about comments later. For now, undo all your new additions to Main.java, because as mentioned before we generally don’t want to put code here. Next we’ll do a small project to get you a little bit more practice with methods and variables so you can see how you can use them to modify the behavior of your Romi.</p>
      }
    },
    'Modifying Your Romi’s Drive Behavior': {
      14: {
        actionType: ActionType.Search,
        content: <p>Let’s take a look at how you can use variables in code to change the behavior of your robot. Open the file called Drivetrain.java. You can find it in the “Subsystems” folder in src/main/java/frc/robot. On lines 45-47 there is a method called arcadeDrive. Unlike System.out.println, this method is a custom-created method in our code, as opposed to a method native to the Java programming language. We will talk more about user-created methods soon. For now, take a look at line 45. There are parentheses, inside of which you see “double xaxisSpeed, double zaxisRotate”. These are variables that are being declared. This is a slightly different way to declare variables which we’ll talk more about soon. What’s important about these variables is when this code runs, they are assigned values dynamically. This is different than when you declared variables above and set them equal to a value. Again, we’ll discuss it more soon, but for now, just know that whenever this code runs, these variables are assigned the values that are read from the joysticks. Remember, the joysticks range from -1 to 1, so that’s the possible range these variables could receive. If one joystick axis is halfway forward and the other is all the way back, they would have values of .5 and -1, respectively.</p>
      },
      15: {
        actionType: ActionType.Code,
        content: <p>On line 46, we call another method, and pass in the same variables. We didn’t really talk about “passing in” when we were using SOP, but to pass in means to send some information to a method. With SOP, you’re passing in the text you want to print. The method prints whatever it’s given, so you give it what you want to print. Line 46 functions the same way, except you’re passing in joystick values instead. We want to get some practice seeing how variables can affect our robot. If you press F5 right now and deploy your code to your Romi, you can try driving it around for a moment. Get a feel for how fast it goes when you give it full throttle, half throttle, etc. We’re going to modify the throttle power and then you can compare the two.</p>
      },
      16: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson2_16.png'/>,
        content: <p>In this method, the throttle output is represented by the variable called “xaxisSpeed”. To modify the power, simply insert an additional line on line 46, before the previously existing line 46, that looks something like this:</p>
      },
      17: {
        actionType: ActionType.Code,
        content: <p>You don’t have to use .5, but it’s a good choice to make the effect obvious. Do choose a number between 0 and 1. Then run your code and try driving your robot around. You’ll notice that the power output is scaled by whatever number you chose. Thinking about the code, this makes sense – you took the power and multiplied it by some coefficient. Now try a few other values. Try a number greater than one, try zero, and try a negative number. Before you deploy each change, try to predict what will happen. Were your predictions correct?</p>
      },
      18: {
        actionType: ActionType.Code,
        content: <p>A number greater than one will not increase the maximum speed of the robot, because that is physically limited by the hardware, however it will reduce controllability because even a small amount of joystick input will result in sending maximum power output. Zero will make any input from that joystick irrelevant. A negative number will scale the output by whatever coefficient you chose and also invert forward and backward. If you want, you can also try playing around with the zaxisRotate variable, or even both variables at once.</p>
      },
      19: {
        actionType: ActionType.Read,
        content: <p>Playing with these variables demonstrates how you can use variables to control your robot. For example, with the default code, the turning controls are pretty sensitive – if you’re going full power forward and try to turn at all full power at the same time, your robot will turn, but it will stop moving forward at all. It might be more comfortable to drive if the robot turned while still moving forward if both joystick axes are given max power. Scaling the rotate by .65 and leaving the speed at full power, for example, would achieve this, although it would reduce the max speed at which one could turn even when not driving forward. In a future lesson we’ll cover how we could get the benefits of the scaled turn at full power without sacrificing anything. For now, you’ve developed an understanding of what variables are and how you can use them, and we’ll keep building upon this knowledge.</p>
      }
    }
  },
  'Lesson 3 - Methods, Classes, and Objects': {
    'totalParagraphs': 22,
    'Introduction': {
      0: {
        content: <p>In Lesson 2 you learned what methods are, but we only scratched the surface. In this lesson we’ll introduce two more critical concepts – classes and objects. We’ll learn how to utilize the buttons on your joystick and make the on-board lights on the Romi turn on and off. Start off by creating a new RomiReference project called “Lights”.</p>,
        actionType: ActionType.Code,
      }
    },
    'Classes & Objects': {
      1: {
        content: <p>Java is what is known as an “object-oriented” programming language, or OOP. The basic concept behind OOP is that there are classes, which represent real-world idea or concepts, that can be described in code. For example, you could have a “Car” class, and in code, you could describe a car, by doing things like keeping track of its model, make, max speed, current speed, etc. Structuring code like this makes it easy to think about because your code relates to your real-life concept of what you’re working with. An object is an instance of a class. For example, you could have a Car class, and then individual objects that represent individual cars. In Java, each class is typically represented by one file, and each file represents one class. This is why you in the explorer you see filenames that correspond to concepts and ideas that make sense in English. For example, there is “Robot.java” which represents a robot, “Drivetrain.java” that represents a drivetrain, and so forth. We’ll do a deep dive on classes and objects soon, but for today we’ll keep moving quickly and get you writing code before going too in-depth. As you read through the next few paragraphs, think about the big picture and don’t worry too much about remembering each specific keyword, because you’ll remember them better after we go in more depth, and you can refer back to this lesson and re-read the following paragraphs as needed until then.</p>,
        actionType: ActionType.Read,
      },
      2: {
        image: <img src='./images/lesson3_2.png'/>,
        content: <p>You can create classes by defining them in files. For example, the Drivetrain.java file defines the Drivetrain class as mentioned above. If you open Drivetrain.java and look at line 14, you’ll see the text “public class Drivetrain” which, declares the Drivetrain class. Then you’ll see several lines that look like normal variable declarations “double kWheelDiameterInch = 2.75591;”, but with extra words in front. Don’t worry about those extra words for now. These are variables that belong to the Drivetrain class and help create a logical model of a drivetrain. Classes can be composed of variables that are relevant to the class, which can then later be accessed when using the class.</p>,
        actionType: ActionType.Search,
      },
      3: {
        actionType: ActionType.Search,
        image: <img src='./images/lesson3_3.png'/>,
        content: <p>If you look at lines 20 and 21, you’ll see two more variables declared – m_left and m_rightMotor. This makes sense – thinking about the Romi, it has two motors, one on each side. However, these variables are unlike variables you’ve seen before. Instead of being of type int or double, they’re of type Spark. What is a Spark? Well, turns out you can hover your mouse over the word Spark to get a brief description. There’s a lot of technical information in the pop-up that you can ignore for now, but the key part is the first sentence: “REV Robotics SPARK Speed Controller.” A Spark represents a real-world object called a speed controller, which physically handles outputting voltage to motors to make them spin. In this case it’s called a SPARK and manufactured by the company REV Robotics.</p>
      },
      4: {
        actionType: ActionType.Search,
        content: <p>The Java programming language is used worldwide for billions of devices and programs, and certainly cannot natively support every piece of hardware ever manufactured, like a SPARK motor controller. So how can we declare a variable of type Spark? The answer is, once a class is created in Java, you can declare variables of that type. So, somebody made a class called Spark, just like we have a class called Drivetrain. Once the Spark class exists, we can create Spark variables. These variables are different than more “basic” variables like ints and doubles. Ints and doubles are called primitive variables because they are inherent to Java. There are a few other primitive variable types, for example boolean variables which represent either “true” or “false”. But variables of non-primitive types, or in other words variables that are of the type of a class, are called objects. Once a class exists, objects of that class can be created. An object of a class is called an instance of that class. So, referencing the Drivetrain class we’re looking at, on line 14 the class is declared. On lines 15 and 16, two primitive variables are declared of type double, and on lines 20 and 21 two objects are defined of type Spark. The Spark class is defined somewhere else, but we’re not worried about there here. Someone else did the work of making the Spark class work, and now you get to use it. Notice how when variables that are objects are created, they use an additional keyword “new”, and then repeat the object name – for example on line 20 when declaring the m_leftMotor spark object, it says “new Spark(0)”. Again, we’ll talk about this more later on but for now, when you see the “new” keyword, that’s your clue that it’s an object being created instead of a primitive. Another clue is that for objects the variable type is capitalized – e.g. Spark instead of spark, but not for primitive variables (e.g. int instead of Int.)</p>
      },
      5: {
        actionType: ActionType.Read,
        content: <p>That’s a lot of information to take in so let’s do a quick recap. In Java there are classes, which can be defined, and after doing so they can be used by creating an instance of the class, which is called and object. Classes can be given variables which describe the class, for example describing a drivetrain by declaring that it has a left and a right motor. These variables can then be used when working with the class. Let’s show how that happens.</p>
      },
      6: {
        actionType: ActionType.Search,
        content: <p>You already saw how on lines 20 and 21, two Spark objects are created. On line 29, these objects are used to create a “DifferentialDrive” object. DifferentialDrive is another class that has been created for us that has some built-in functionality that handles the math that converts joystick values to motor outputs. For this class to work it needs motors to output to, which is why you can see at the end of line 29 that the two Spark objects are being used to create the DifferentialDrive object, called m_diffDrive. Scroll down and on line 46 you’ll see m_diffDrive.arcadeDrive(xaxisSpeed, zaxisRotate), which you’re familiar with from lesson 2. This is an example of using an object to do something – in this case, the m_diffDrive object, and we’re using the “arcadeDrive” method that has been declared as part of the DifferentialDrive class. This is another critical concept when it comes to classes and objects – methods can be defined as part of the behavior for the class. Then those methods can be called using objects of that class.</p>
      },
      7: {
        actionType: ActionType.Read,
        content: <p>We’ll go in more depth soon but now let’s dive into our project of using buttons on the joystick to turn a light on and off. To do this there are a couple steps. First, we’re going to have to create two commands, one to turn the light on, and one to turn it off. Commands are another concept we’ll talk about soon but for now you can think of a command as “something the robot can do”. For example, you could make a command to drive forward, a command to stop, a command to toggle a light, etc. In this case we’ll make two; one each for turning the light on and off. Let’s walk through it step by step. After the commands are created, you’ll need to add a couple lines of code that tell the commands to run when a button on the joystick is pressed. Let’s get started.</p>
      },
      8: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_8.png'/>,
        content: <p>The first thing is to create the commands. Let’s start with the command to turn the light on. Navigate to the “commands” folder in src/main/java/frc/robot. Right click on the folder itself in VSCode and select “Create a new class/command” at the bottom of the popup.</p>
      },
      9: {
        actionType: ActionType.Code,
        content: <p>This will bring up a dropdown with a list of options. Select “Command (New)”. This brings up a prompt to type a class name. Type “TurnLedOn” and press enter. This brings up a new file with some method stubs – a stub is a method without any contents. Lines 17, 21, 25, and 29 are examples of this. Now follow these steps to create this command. Note that you need to follow the steps in order, or the line numbers won’t sync up, because the line numbers assume that you have entered the lines described in the previous steps.</p>
      },
      10: {
        actionType: ActionType.Code,
        content: <p>1. Move your cursor to the very end of line 7, after the semicolon, press enter, and then type “import frc.robot.subsystems.OnBoardIO;”. This line tells the program that it will need to use the robot’s on-board IO (input/output) subsystem. This is the subsystem that has the lights we’re going to turn on. Note how the line ends with a semicolon. Most lines of code in Java end with semicolons; this is how you tell Java that the line is finished. The exceptions are lines that end with opening and closing curly brackets, for example lines 10, 14, and 18 in the image in step 3. You’ll learn more about the difference between these kinds of lines soon.</p>
      },
      11: {
        actionType: ActionType.Code,
        content: <p>2. Put your cursor at the end of line 10 and press enter, and then type “private final OnBoardIO m_io;”, then press enter. Again – don’t forget the semicolon. In step 1 we told our program that it will need to use an OnBoardIO subsystem, and on this line we declare that OnBoardIO subsystem for it to use.</p>
      },
      12: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_12.png'/>,
        content: <div>
          <p>3. Put your cursor inside the parentheses on line 14 (NOT the curly bracket at the end) and type “OnBoardIO io”. Then go to the end of line 15 (the next line), press enter, and add two lines of code. These lines initialize the OnBoardIO object.</p>
          <ol type='a'>
            <li>m_io = io;</li>
            <li>addRequirements(io);</li>
            <li>When you’re done with these steps, lines 10-19 should look like this:</li>
          </ol>
        </div>
      },
      13: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_13.png'/>,
        content: <p>4. Move your cursor to inside the curly brackets on line 26 (this time NOT the parentheses.) Press enter and then add a line of code by typing “m_io.setGreenLed(true);”. Your execute method should now look like this:</p>
      },
      14: {
        actionType: ActionType.Code,
        content: <p>Congratulations! You’ve now created your first robot command. Unfortunately, there’s no way to activate this command yet, but we’ll add that in a moment. First, let’s create the sister command that turns the LED off. Follow the steps above again to create another command in the same folder, but call it “TurnLedOff”. Follow all the same steps to add the code to the new command, but when you get to line 27 where you do m_io.setGreenLed(true);, use “false” instead of “true”. Once you’ve created the second command, it’s time to hook them up to a joystick button.</p>
      },
      15: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_15.png'/>,
        content: <p>The first step in hooking them up to a joystick button is figuring out which joystick button is which. This is a similar process to how you figured out which joystick axis was which in lesson one. Open the robot simulator interface if you don’t already have it open (you can press F5 to deploy your code right now if you’re connected to the Romi) and look at the joysticks window. You might need to re-drag your joystick from the Systems Joystick window, to the Joysticks window. Press whatever button on your controller you want to control the light turning on and off, and look at the yellow squares in the joystick window. One of them will light up. Count which number it is, from upper left, starting at one. For example, in this image, button 3 is lit up. Make note of which button lights up as you will need to remember the number in your code.</p>
      },
      16: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_16.png'/>,
        content: <p>Now go to RobotContainer.java, put your cursor at the end of line 65, press enter twice, and type out code to match the image below. However, where there are red boxes, change the number 1 to whatever number your button is. These lines of code create a “JoystickButton” object and bind the commands you created to execute when you press and release the button, respectively. You’ll see the red underlines indicating you have errors, and we’ll fix those next. Note that it’s possible that VSCode will fix the red underline under “JoystickButton” on its own. If it does so, that red underline will go away, and all the line numbers in your code will increase by one relative to the image below.</p>
      },
      17: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_17.png'/>,
        content: <p>If VSCode does not fix the red underline under JoystickButton automatically, you’ll need to do so yourself. To do so, click on the green text JoystickButton, and you’ll see a little yellow lightbulb pop up to the left. VSCode has limited capabilities to fix common problems for you, and you can access this functionality by clicking on yellow lightbulbs when they appear. Do so and then click “Import ‘JoystickButton’. This will add a line of code to the top of your program, telling the RobotContainer class to look for the JoystickButton class, which you use when you declare your button1 variable on line 67 above (now 68 after it inserts a line of code.) You will have the same errors on your TurnLedOn and Off commands, because RobotContainer needs to look for those files as well. Use the same method to import those two files as well, and your errors will go away. As alluded to above, sometimes VSCode will fix these errors on its own without you needing to make these clicks, but often you’ll have to do this.</p>
      },
      18: {
        actionType: ActionType.Search,
        image: <img src='./images/lesson3_18.png'/>,
        content: <p>When you’re done importing the classes using the lightbulb, your code should be error-free and look like the photo below:</p>
      },
      19: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson3_19.png'/>,
        content: <p>You’re now almost done. The last thing to do is to tell the Romi to use the green LED as an output device. The way the Romi is physically constructed, its green and red LEDs use “digital input/output”, or DIO, ports, which can be used for either input or output. Using an LED is an example of output – the Romi will output the light. An example of input would be if you plugged a button into the DIO port, which would let the Romi receive input. We will not cover that in this course. By default, when you create a RomiReference project, both the red and green LED DIO ports are set to receive input, instead of output, so you’ll need to change that. Head to RobotContainer.java, go to line 34, and change the first instance of the word “INPUT” to “OUTPUT”. The second “INPUT” refers to the red LED, which you’re not using in this lesson. Example:</p>
      },
      20: {
        actionType: ActionType.Code,
        content: <p>Now you’re done! You can deploy your code to your Romi, enable it, and try pressing your button. You will notice that a light near the back of the Romi lights up while you’re holding the button down, and turns off when you release it.</p>
      },
      21: {
        actionType: ActionType.Read,
        content: <p>Congratulations on finishing the first three lessons. You’ve now learned a lot of the basics of Java and robot programming. There’s still a lot to learn but if you’ve made it this far, you’re doing well and you should have a basic understanding of how software can be used to effect the behavior of the robot. Over the next lessons we’ll build on that understanding, which will increase both your skills and your confidence in writing your own programs.</p>
      }
    }
  },
  'Lesson 4 - Methods Deep Dive': {
    'totalParagraphs': 15,
    'Introduction': {
      0: {
        content: <p>Over the past two lessons you’ve learned what methods are and used them, but you’ve probably noticed a lot of things that you don’t understand about them. In this lesson we’re going to start building your understanding. Remember, methods are basically self-contained chunks of code that can be called in some other location, so the code doesn't need to be repeated. There are built-in methods (for example System.out.println) and you can also write your own methods. To do this lesson, we’re going to want a clean workspace in VSCode that doesn’t interact with the Romi, so we can write some basic methods and run them without needing to connect to the robot. Then in the next lesson we’ll switch back to working with the Romi and you’ll write some code that gives the Romi a slightly different control scheme while you hold down a button.</p>,
        actionType: ActionType.Read,
      }
    },
    'Setting Up a New Workspace': {
      1: {
        image: <img src='./images/lesson4_1.png'/>,
        content: <p>To set up a new workspace in VSCode, click on the “Java Projects” button in the lower-left corner of your screen. Then click the “+” icon. If you don’t see the Java Projects button, click the Explorer icon in the upper-left corner of your screen, and it will appear.</p>,
        actionType: ActionType.Code,
      },
      2: {
        image: <img src='./images/lesson4_2.png'/>,
        content: <p>After clicking the plus, select the “No build tools” option from the drop down:</p>,
        actionType: ActionType.Code,
      },
      3: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson4_3.png'/>,
        content: <p>A window will pop up asking you to designate a folder for the project. You can choose whatever folder you want. You might find it helpful to create a folder somewhere on your computer to hold all of your programming projects. Regardless of where you locate it, select a folder for the project location. Type a name for your project and press enter; a good name to use is “MethodsScratch”. After you press enter, you’ll be greeted with a new instance of VSCode and you won’t see any code, but your project will already have a file called App.java. You can open it by drilling into the “src” folder in explorer on the left. Open it and you’ll see something like this</p>
      },
      4: {
        actionType: ActionType.Code,
        content: <p>Go ahead and press F5 and you’ll see “Hello, World!” output in the terminal at the bottom of your screen. Outputting “hello world” is a common first program to write and is often used in examples and teaching. Try typing something else in the quotes in the SOP on line 3 and running your program again, just to prove that the code you’re running is the code you’re looking at. Now that you’re set up, you’ll be able to try out writing your own programs from scratch and running them here!</p>
      }
    },
    'The Main Method': {
      5: {
        actionType: ActionType.Search,
        image: <img src='./images/lesson4_5.png'/>,
        content: <p>Every Java program must have exactly one “main” method, defined by the rather confusing-looking chain of word “public static void main(String[] args)”. Each of those words have a meeting you will learn soon – in this lesson you’ll learn what “void” means, and you can ignore the other words there for now. But the word “main” is the name of the method. Each program must have exactly one, because the main method is where your program starts, and every program needs a defined starting point. In practice there’s usually not much code in main methods; it simply calls some other method with a single line. As an example here’s the main method of your Romi project (you can find this in Main.java in java/frc/robot if you want to look for yourself.) Having only one line of code in your main method is a good practice to follow although for the sample programs you’ll write today it’s not super important</p>
      },
    },
    'YouTube Videos': {
      6: {
        actionType: ActionType.Read,
        image: <img src='./images/lesson4_6.png'/>,
        content: <p>Now that you have a work environment setup where you can code, it’s time to get some practice. Throughout this course there will be links to various YouTube videos. There are a couple things to keep in mind with YouTube videos. First, they’re often in a different application for writing code. You might see the author use keyboard shortcuts or interface buttons that don’t exist in VSCode. However, the code itself runs the same way, so don’t worry about matching the keyboard shortcuts. Second, you may find it beneficial to change the playback speed to go either faster or slower depending on your prior experience and understanding. You can change the playback speed by clicking the gear in the lower-right corner and selecting a speed.</p>
      }
    },
    'Method Types': {
      7: {
        actionType: ActionType.Code,
        content: <p>Watch this video on YouTube for a walkthrough on writing some simple methods, and follow along by writing out and running the methods yourself in VSCode: <a href='https://www.youtube.com/watch?v=-IJ5izjbWIA'>https://www.youtube.com/watch?v=-IJ5izjbWIA</a> In the video, two different kinds of methods are used – some that perform some action without returning any data, and some that return data. This is where the void keyword comes in. A method that does not return any data is declared using the void keyword. A method that does return data is declared using the type of data it returns. Thus far we’ve worked with ints, doubles, booleans (true/false), and a couple of objects. Another important data type that is used in the video is String. A string is simply text. You’ll notice that unlike int and double, String is capitalized like an object. This is because Strings are in fact objects, but they are built-in objects that are part of Java. Strings being objects will matter more later but doesn’t matter too much right now for following along with the video. It’s simply good to know so you understand why String is capitalized while int is not.</p>
      }
    },
    'Scope': {
      8: {
        actionType: ActionType.Code,
        content: <p>After finishing the methods video, watch one more video about variable scope, and again follow along by writing out the methods in VSCode: <a href='https://www.youtube.com/watch?v=Y2iN3TO5qOQ'>https://www.youtube.com/watch?v=Y2iN3TO5qOQ</a> "Scope" is the concept of where a variable exists and for how long. Basically, variables declared in a method only exist in that method, and variables declared in a class exist throughout that entire class. A variable cannot be accessed or changed from a location in code where it does not exist</p>
      }
    },
    'Getting User Input': {
      9: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson4_9.png'/>,
        content: <p>With the Romi, we got user input in the form of joystick and button presses. With this desktop app that we’re working on, we don’t have a joystick or buttons, but we do have our computer’s keyboard. Let’s write a quick program that gets input from the user and then prints the input back out. To do this, we’ll use Java’s built in Scanner class. The scanner accepts input in the terminal window where your output shows up. You will be able to type a number, press enter, and your program will read that number. Make sure that if your program is looking for an integer, you give it an integer! If you give it a decimal or a String (text), you will get an error. Here is a sample program you can write in VSCode:</p>
      },
      10: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson4_10.png'/>,
        content: <p>Run this program and look at the terminal in the bottom of your screen, and it will be asking you for input. Type an integer, press enter, and the program will echo your input:</p>
      }
    },
    'Practice': {
      11: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson4_11.png'/>,
        content: <p>You’re now familiar with several concepts in Java: variables, methods, classes, objects, scope, and getting user input. That’s a lot of knowledge, and it’s enough for you to start writing some programs on your own. We’ll make a small calculator app. Create a new project in VSCode (refer back to the start of this lesson if you forget how to do so) and call it Calculator. In your main method, declare a Scanner object and use it to initialize two integer variables. For example:</p>
      },
      12: {
        actionType: ActionType.Code,
        content: <div>
          <p style={{margin: 0}}>Now add five methods to your program as follows.</p>
          <ol>
            <li>A "welcome" method that takes no parameters and returns nothing, that outputs a simple "Welcome to calculator" message to the user.</li>
            <li>An "add" method that takes two integer parameters, adds the two integers together, and outputs the result. This method does not return anything.</li>
            <li>A "multiply" method that takes two integer parameters, multiplies them together, and then returns the result as an integer.</li>
            <li>A "subtract" method that takes two integer parameters, subtracts them, and then returns the result as an integer.</li>
            <li>A "cube" method that takes a single integer parameter, cubes it, and returns the result as an integer.</li>
          </ol>
        </div>
      },
      13: {
        actionType: ActionType.Code,
        image: <img src='./images/lesson4_13.png'/>,
        content: <p>Then, in your main method, call each of these six methods using one or both numbers that the user input. For the methods that return a value instead of outputting a result, output the value they return in your main method. You can use a variable to do this like so:</p>        
      },
      14: {
        actionType: ActionType.Code,
        content: <p>When you're done and you run your program, it should ask for two inputs, and then have five lines of output</p>
      }
    }
  }
}

export default data;