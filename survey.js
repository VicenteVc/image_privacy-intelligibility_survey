
var isPilot = true
var isPrivacy = (Math.random() > 0.5)
var isIntel = Boolean(1 - isPrivacy)
var condIndex = Math.floor(Math.random() * 10)
if (condIndex == 3 || condIndex == 7) condIndex--;

var imgCond = parseInt(condIndex / 4)
var camCond = condIndex % 4
var withBlur = (imgCond != 2)
var withHeatmap = (camCond != 0)

var privacyIntro = "Since the photos are taken automatically, they inevitably capture individuals in the surrounding environment. These individuals could be family members, friends, or complete strangers, and they are typically not aware they are being photographed."
var completeCode = Math.floor(Math.random() * 1000000)

var imageOrder = [1,2,5,6,10,11,19,20,32,33,35,36,40,41,46,47,51,52];

function shuffle(arr) {
  return Math.random() > 0.5 ? -1 : 1;
}
imageOrder.sort(shuffle);
var index=0;

/* for debug */
console.log("isPilot: "+isPilot)
console.log("isPrivacy: "+isPrivacy)
console.log("isIntel: "+isIntel)
console.log("condIndex (of heatmap): "+condIndex)
console.log("camCond: "+camCond)
console.log("imgCond: "+imgCond)
console.log("withBlur: "+withBlur)
console.log("withHeatmap: "+withHeatmap)
console.log("completeCode: "+completeCode)
console.log("imageOrder: "+imageOrder)
/* for debug */

var surveyJSON = 
{
 pages: [
  /* Beginning */
  {
   name: "Beginning",
   elements: [
    {
     type: "panel",
     name: "panel10",
     elements: [
      {
       type: "html",
       name: "question8",
       html: "<h3 style=\"font-weight:500;\">Study on Understanding Smart Wearable Camera Images</h3>\n<h4>&nbsp;</h4>\n<h4 style=\"font-weight:500;\">In this research study, we are interested in people's understanding and perceptions on photos captured by wearable cameras. View some images from a Smart Wearable Camera and answer some quick questions! The survey should take up to 30 minutes. </h4>"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "qcond",
     visible: false,
     defaultValue: condIndex,
     choices: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
     ],
     colCount: 0
    },
    {
     type: "radiogroup",
     name: "qintel",
     visible: false,
     defaultValue: 1 - isPrivacy,
     choices: [
      "0",
      "1"
     ],
     colCount: 0
    }
   ]
  }, 
  /* Introduction */
  {
   name: "Introduction",
   elements: [
    {
     type: "html",
     name: "question35",
     html: "<h3 style=\"font-weight:500;\">Introduction </h3>"
    },
    {
     type: "panel",
     name: "tmp",
     elements: [
      {
       type: "html",
       name: "question14",
       titleLocation: "hidden",
       html: "<p><span style=\"font-weight: 400;font-size:1.17em;\">Thank you for showing interest to this research study! </span>&nbsp;</p>\n\n<p><span style=\"font-weight: 400;font-size:1.17em;\"> Over the last few years a new category of photographic cameras has emerged: wearable cameras. These devices are usually worn on the body (e.g., head or torso) and take photographs automatically at regular intervals (e.g., every 30 seconds). These cameras have been traditionally used to capture experiences from a first-person perspective (e.g., take photos while surfing). Popular wearable cameras include the GoPro, Google Glass, Google Clips, and the Narrative: </span></p>\n\n\n"
      },
      {
       type: "imagepicker",
       name: "back",
       readOnly: true,
       titleLocation: "hidden",
       choices: [
        {
         value: "example1",
         imageLink: "figures/common/example1.jpg"
        },
        {
         value: "example2",
         imageLink: "figures/common/example2.jpg"
        },
        {
         value: "example3",
         imageLink: "figures/common/example3.jpg"
        }
       ],
       hideIfChoicesEmpty: true,
       imageFit: "fill"
      }
     ],
     readOnly: true,
     questionTitleLocation: "left"
    },
    {
     type: "panel",
     name: "panel67",
     elements: [
      {
       type: "html",
       name: "question2",
       html: "<p><span style=\"font-weight: 400;font-size:1.17em;\"> Recently, individuals have begun to wear these body-mounted cameras while performing everyday activities such as cooking, socializing, and going to work." +(isPrivacy?privacyIntro:" ")+ "Here are some examples of wearable camera photographs recording everyday activities:\n</span></p>\n"
      },
      {
       type: "imagepicker",
       name: "question6",
       readOnly: true,
       titleLocation: "hidden",
       choices: [
        {
         value: "example4",
         imageLink: "figures/common/example4.jpg"
        },
        {
         value: "example5",
         imageLink: "figures/common/example5.jpg"
        },
        {
         value: "example6",
         imageLink: "figures/common/example6.jpg"
        }
       ],
       hideIfChoicesEmpty: true,
       imageFit: "fill"
      },
      {
       type: "html",
       name: "question17",
       html: "<p><span style=\"font-weight: 400;font-size:1.17em;\">In this study, we are interested in people's understanding and perceptions on photos captured by wearable cameras. After </span><strong style=\"font-size:1.17em;\">giving consent</strong><span style=\"font-weight: 400;font-size:1.17em;\"> and completing a short </span><strong style=\"font-size:1.17em;\">quiz</strong><span style=\"font-weight: 400;font-size:1.17em;\">, we will ask you several <strong>questions related to photos</strong> from wearable cameras. Finally, we would like you to answer some <strong>demographic questions</strong>. </span></p>\n<p><span style=\"font-weight: 400;font-size:1.17em;\">It would take about <strong>30 minutes</strong> to complete the whole survey.</span></p>\n"
      }
     ]
    }
   ],
  },
  /* Consent */
  {
   name: "Consent",
   elements: [
    {
     type: "html",
     name: "question37",
     html: "<h3 style=\"font-weight:500;\">Consent Form </h3>"
    },
    {
     type: "panel",
     name: "panel5",
     elements: [
      {
       type: "html",
       name: "question19",
       titleLocation: "top",
       html: "<p style=\"font-size:14px;\"><strong>Title: Understanding Smart Wearable Camera Images </strong></p>\n<p style=\"font-size:14px;\"><strong>Principle Investigator:</strong></p>\n\n<p><span style=\"font-weight: 400;font-size:14px;\">Assistant Professor Brian Lim</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Organisation: School of Computing, National University of Singapore</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Email: <a href=\"mailto:brianlim@comp.nus.edu.sg\">brianlim@comp.nus.edu.sg</a></span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Wencan Zhang</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Organisation: School of Computing, National University of Singapore</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Email: <a href=\"mailto:wzhang@comp.nus.edu.sg\">wzhang@comp.nus.edu.sg</a></span></p>\n<p>&nbsp;</p>\n<p style=\"font-size:14px;\"><strong>Before participating in this research, please read the following.</strong></p>\n<p style=\"font-size:14px;\"><strong>Participation is voluntary</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">You must be at least 18 years of age to participate. It is your choice whether or not to participate in this research. &nbsp;If you choose to participate, you may change your mind and leave the study at any time. Refusal to participate or stopping your participation will involve no penalty.</span></p>\n<p style=\"font-size:14px;\"><strong>What is the purpose of this research?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">This study aims to investigate people’s understanding and perception of wearable camera photos. </span></p>\n<p style=\"font-size:14px;\"><strong>How long will I take part in this research?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">It takes around 30 minutes to complete.</span></p>\n<p style=\"font-size:14px;\"><strong>What is the approximate number of research participants involved?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">There will be approximately 600 participants in this study.</span></p>\n<p style=\"font-size:14px;\"><strong>What will be done if I take part in this research?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Before the study, you have to complete a short warm-up quiz. Then you will review several images and answer several questions for each image. Finally, you will answer demographic questions.</span></p>\n<p style=\"font-size:14px;\"><strong>What are the risks and possible discomforts?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">None. </span></p>\n<p style=\"font-size:14px;\"><strong>Are there any benefits from being in this research study?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">There is no direct benefit to you by participating in this research study. The public, researchers with interest in wearable cameras should benefit from the results of this study. </span></p>\n<p style=\"font-size:14px;\"><strong>Will I be compensated for participating in this research?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">You will be compensated up to USD$1.50 if you complete this survey. </span></p>\n<p style=\"font-size:14px;\"><strong>If I take part in this research, how will my privacy be protected? What happens to the information you collect?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Information from this study will be collected on secure servers, and strict confidentiality will be maintained. No identifying information is collected. All output of the research will be reported in the aggregate based on information from multiple respondents, anonymously.</span></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">All data collected will be kept in accordance to the University&rsquo;s Research Data Management Policy. Research data used in any publication will be kept for a minimum of 10 years before being discarded, and email addresses stored will be deleted upon completion of the research.</span></p>\n<p style=\"font-size:14px;\"><strong>Can I refuse to participate in this research? </strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">Yes, you can. Your decision to participate in this research is voluntary. You can also withdraw from the research at any time without giving any reasons. </span></p>\n<p style=\"font-size:14px;\"><strong>If I have any questions, concerns or complaints about this research study, who can I talk to?</strong></p>\n<p><span style=\"font-weight: 400;font-size:14px;\">The researcher for this study is Wencan Zhang. If you have questions, concerns, or complaints, or think the research has hurt you, please feel free to contact Wencan at wzhang@comp.nus.edu.sg.</span></p>"
      }
     ],
     readOnly: true,
     questionTitleLocation: "left"
    },
    {
     type: "html",
     name: "question21",
     visible: 1-isPilot,
     html: "<p><span style=\"font-weight: 400;font-size:14px;\">For an independent opinion regarding the research and the rights of research participants, you may contact a staff member of the National University of Singapore Institutional Review Board (Attn: Dr. Chan Tuck Wai, at telephone (+65) 6516 1234 or email at irb@nus.edu.sg).</span></p>"
    },
    {
     type: "panel",
     name: "panel68",
     elements: [
      {
       type: "html",
       name: "question7",
       html: "<p><span style=\"font-weight: 400;font-size:14px;\">By clicking the \"Accept\" button, you acknowledge <strong>ALL of the following</strong> that: </span></p>\n<p style=\"font-size:14px;\">1. I am at least 18 years of age,</p>\n<p style=\"font-size:14px;\">2. I agree to take part in the aforementioned research,</p>\n<p style=\"font-size:14px;\">3. I will not have any financial benefits that result from the commercial development of this research, and</p>\n<p style=\"font-size:14px;\">4. I consent to have the coded data made available for future research.</p>"
      },
      {
       type: "boolean",
       name: "accept",
       title: "Accept",
       defaultValue: false,
       validators: [
        {
         type: "expression",
         text: "Please accept to consent, if you would like to participate in this study.",
         expression: "{accept} = true"
        }
       ]
      }
     ]
    }
   ],
  },
  /* Training */
  {
   name: "Training",
   elements: [
    {
     type: "html",
     name: "question38",
     html: "<h3 style=\"font-weight:500;\">Training </h3>"
    },
    {
     type: "panel",
     name: "panel3",
     elements: [
      {
       type: "html",
       name: "question43",
       width: "60%",
       titleLocation: "top",
       html: "<p><span style=\"font-weight: 400;font-size:1.17em;\">\nNow, we will describe the Smart Wearable Cameras that automatically captures images (e.g., every 30 seconds)"+(withHeatmap || isPrivacy?"and applies smart filters":"")+". Please study the images and descriptions carefully. For the following questions, you are required to understand what activity the camera is photographing.\n</span></p>\n<p><span style=\"font-weight: 400;font-size:1.17em;\">\nThe following are some examples of photos taken from the Smart Wearable Camera. Note how photos are taken from the chest level and represent various <strong>activities that the wearer is doing</strong>, such as socializing and talking, or walking outdoors.\n</span></p>"
      },
      {
       type: "imagepicker",
       name: "question29",
       width: "40%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "Wearer's activity: riding a bike",
         imageLink: "figures/common/training1.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220,
       showLabel: true
      }
     ]
    },
    {
     type: "panel",
     name: "panel4",
     elements: [
      {
       type: "html",
       name: "question45",
       html: "<p><span style=\"font-weight: 400;font-size:1.17em;\"> The Smart Wearable Camera applies a Heatmap Filter to help viewers understand what activity the wearer is doing. The heatmap helps by suggesting which part of the image is important to understand the activity. Red areas are more important, while blur areas are less important. As we can see from this example, the heatmap suggests the handle bar region, which is a strong indication of riding a bike.\n</span></p>\n<p><span style=\"font-weight: 400;font-size:1.17em;color:red;\">\nNote that sometimes the heatmap may be <strong>inaccurate or wrong</strong>.\n</span></p>"
      },
      {
       type: "imagepicker",
       name: "question44",
       width: "520px",
       readOnly: true,
       titleLocation: "hidden",
       choices: [
        {
         value: "Original image",
         imageLink: "figures/common/training1.png"
        },
        {
         value: "Heatmap",
         imageLink: "figures/common/training2.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220,
       showLabel: true
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "120px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 80
      }
     ],
     visible: withHeatmap,
     readOnly: true,
    },
    {
     type: "panel",
     name: "panel1",
     elements: [
      {
       type: "html",
       name: "question3",
       html: "<p><span style=\"font-weight: 400;font-size:1.17em;\">The Smart Wearable Camera also applies a Blur Filter on the captured image to protect the privacy of bystanders around "+(isPrivacy?"the Smart Camera wearer":"you")+". The image on the left is the original image, but blurred (right image) by the time you or anyone else can see it. On the other hand, the blurring effect may makes it harder to understand what activity the camera is photographing.\n</span></p>"
      },
      {
       type: "imagepicker",
       name: "question12",
       readOnly: true,
       titleLocation: "hidden",
       choices: [
        {
         value: "Original image",
         imageLink: "figures/common/training1.png"
        },
        {
         value: "Blurred image",
         imageLink: "figures/common/training"+(4-imgCond)+".png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220,
       showLabel: true
      }
     ],
     visible: withBlur,
     readOnly: true
    }
   ],
   // visible: false,
  },

  /* Warm-up */
  {
   name: "WarmUp",
   elements: [
    {
     type: "html",
     name: "question0_1",
     html: "<h3 style=\"font-weight:500;\">Warm-up: Screening questions </h3>"
    },
    {
     type: "panel",
     name: "panel2",
     elements: [
      {
       type: "imagepicker",
       name: "question0_2",
       titleLocation: "hidden",
       choices: [
        {
         value: "warmup1",
         imageLink: "figures/common/warmup1.jpg"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "radiogroup",
       name: "q0_1",
       title: "Where is the photo most likely taken?",
       correctAnswer: "Sunny",
       isRequired: true,
       choices: [
        "Office",
        "Bus",
        "School",
        "Restaurant",
        "Shopping"
       ],
       colCount: 0
      },
      {
       type: "imagepicker",
       name: "question0_2",
       titleLocation: "hidden",
       choices: [
        {
         value: "warmup2",
         imageLink: "figures/common/warmup2.jpg"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "radiogroup",
       name: "q0_2",
       title: "Imagine the photo is captured from your point of view, what are you probably doing now? ",
       correctAnswer: "Riding a bike",
       isRequired: true,
       choices: [
        "Watching a movie",
        "Cooking your dinner",
        "Swimming",
        "Attending a meeting",
        "Riding a bike"
       ],
       colCount: 0
      },
      {
       type: "matrixdropdown",
       name: "q0_3",
       width: "21em",
       title: "Which of the following grid cells contain the computer screen? <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q0_3.1.A} = true or {q0_3.1.B} = true or {q0_3.1.C} = true or {q0_3.1.D} = true or {q0_3.1.E} = true or {q0_3.2.A} = true or {q0_3.2.B} = true or {q0_3.2.C} = true or {q0_3.2.D} = true or {q0_3.2.E} = true or {q0_3.3.A} = true or {q0_3.3.B} = true or {q0_3.3.C} = true or {q0_3.3.D} = true or {q0_3.3.E} = true or {q0_3.4.A} = true or {q0_3.4.B} = true or {q0_3.4.C} = true or {q0_3.4.D} = true or {q0_3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       choices: [
        1,
        2,
        3,
        4
       ],
       cellType: "boolean",
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question0_3",
       width: "270px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "warmup3",
         imageLink: "figures/common/warmup3.jpg"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ],
     title: "All the following photos are captured by wearable cameras."
    },
    {
     type: "panel",
     name: "panel9",
     elements: [
      {
       type: "matrixdropdown",
       name: "q0_4",
       width: "21em",
       title: "According to the heatmap, which grid cells are most important? <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q0_4.1.A} = true or {q0_4.1.B} = true or {q0_4.1.C} = true or {q0_4.1.D} = true or {q0_4.1.E} = true or {q0_4.2.A} = true or {q0_4.2.B} = true or {q0_4.2.C} = true or {q0_4.2.D} = true or {q0_4.2.E} = true or {q0_4.3.A} = true or {q0_4.3.B} = true or {q0_4.3.C} = true or {q0_4.3.D} = true or {q0_4.3.E} = true or {q0_4.4.A} = true or {q0_4.4.B} = true or {q0_4.4.C} = true or {q0_4.4.D} = true or {q0_4.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       choices: [
        1,
        2,
        3,
        4
       ],
       cellType: "boolean",
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question0_4",
       width: "270px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "warmup4",
         imageLink: "figures/common/warmup4.jpg"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
      {
       type: "imagepicker",
       name: "question0_5",
       width: "13%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      }
     ],
     visible: withHeatmap
    }
   ],
   questionsOrder: "initial"
  },
  /* Screening */
  {
   name: "Screening",
   elements: [
    {
     type: "html",
     name: "question13",
     html: "<h3 style=\"font-weight:500;\">Sorry! You do not qualify to continue with the study.</h3> <h3 style=\"font-weight:500;\">Thank you for your interest! </h3>\n\n"
    }
   ],
   visibleIf: withHeatmap?"not({q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true)":"not({q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true)",
   questionsOrder: "initial"
  },
  /* Survey Instruction */
  {
   name: "Survey Instruction",
   elements: [
    {
     type: "html",
     name: "question1",
     html: "<h3 style=\"font-weight:500;\">Next, you will see a series 15 of images and answer several questions for each image. There are 15 pages and 1 page for each image. </h3> \n<p>&nbsp;</p>\n<h4 style=\"font-weight: 500;color:red;\"> Please put your best effort to answer the questions <strong>accurately</strong> and <strong>quickly</strong>. For correct and quick answers, you can receive a bonus up to US$1.50. </h4>\n\n\n"
    }
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },

  /* Task1 */
  {
   name: "Task 1 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 1 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 1",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 1 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: "I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task2 */
  {
   name: "Task 2 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 2 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 2",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 2 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task3 */
  {
   name: "Task 3 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 3 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 3",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 3 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task4 */
  {
   name: "Task 4 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 4 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 4",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 4 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },

  /* Task5 */
  {
   name: "Task 5 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 5 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 5",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 5 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task6 */
  {
   name: "Task 6 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 6 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 6",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 6 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task7 */
  {
   name: "Task 7 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 7 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 7",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 7 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task8 */
  {
   name: "Task 8 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 8 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 8",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 8 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },

  /* Task9 */
  {
   name: "Task 9 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 9 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 9",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 9 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task10 */
  {
   name: "Task 10 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 10 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 10",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 10 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task11 */
  {
   name: "Task 11 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 11 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 11",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 11 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task12 */
  {
   name: "Task 12 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 12 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 12",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 12 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },

  /* Task13 */
  {
   name: "Task 13 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 13 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 13",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 13 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task14 */
  {
   name: "Task 14 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 14 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 14",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 14 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task15 */
  {
   name: "Task 15 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 15 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 15",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 15 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task16 */
  {
   name: "Task 16 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 16 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 16",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 16 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },

  /* Task17 */
  {
   name: "Task 17 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 17 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 17",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 17 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Task18 */
  {
   name: "Task 18 Pre",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 18 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "html",
       name: "question1_2",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question1_3",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[++index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_9",
     html: "<span style=\"font-weight:600;\">Which activity do you think "+(isIntel?"you were doing when the Smart Camera took the photo":"the Smart Camera wearer was doing")+"?</span> <br/><i style='font-size:smaller; font-weight:normal'> Hint: it is ONE of the following activities and <span style=\"color:red\">you must select at least ONE activity as NOT very unlikely. You may select more than one as more likely. </span></i> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
   ]
  },
  {
   name: "Task 18",
   elements: [
    {
     type: "html",
     name: "question1_1",
     html: "<h3 style=\"font-weight:500;\">Task 18 </h3>"
    },
    {
     type: "panel",
     name: "panel1_1",
     elements: [
      {
       type: "imagepicker",
       name: "question1_4",
       width: "260px",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_5",
       width: "260px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/"+imageOrder[index]+"_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question1_6",
       width: "110px",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "legend",
         imageLink: "figures/common/jetLegend.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 70
      },
     ]
    },
    {
     type: "html",
     name: "question1_7",
     html: "<span style=\"font-weight:600;\">Your Previous Selection is:</span> "
    },
    {
     type: "matrix",
     name: "q"+imageOrder[index]+"-1",
     defaultValue: {
      "Walking Outdoors": "Very Unlikely<br/>1",
      Biking: "Very Unlikely<br/>1",
      Eating: "Very Unlikely<br/>1",
      "Public Transport": "Very Unlikely<br/>1",
      Shopping: "Very Unlikely<br/>1",
      "Talking and Socializing": "Very Unlikely<br/>1",
      "Watching TV": "Very Unlikely<br/>1",
      "Cleaning and chores": "Very Unlikely<br/>1",
      Cooking: "Very Unlikely<br/>1"
     },
     isRequired: true,
     validators: [
      {
       type: "expression",
       text: "Please select at least one activity as NOT very unlikely.",
       expression: "{q"+imageOrder[index]+"-1.Walking Outdoors} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Biking} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Public Transport} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Eating} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Shopping} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Talking and Socializing} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Watching TV} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cleaning and chores} <> \"Very Unlikely<br/>1\"\nor {q"+imageOrder[index]+"-1.Cooking} <> \"Very Unlikely<br/>1\""
      }
     ],
     titleLocation: "hidden",
     columns: [
      "Very Unlikely<br/>1",
      "2",
      "3",
      "Neither Unlikely <br/>nor Likely<br/>4",
      "5",
      "6",
      "Very Likely<br/>7"
     ],
     rows: [
      "Walking Outdoors",
      "Biking",
      "Public Transport",
      "Eating",
      "Shopping",
      "Talking and Socializing",
      "Watching TV",
      "Cleaning and chores",
      "Cooking"
     ],
    },
    {
     type: "panel",
     name: "panel1_2",
     elements: [
      {
       type: "text",
       name: "q"+imageOrder[index]+"-2",
       title: "Explain how you identified the activity.",
       isRequired: true,
      },
      {
       type: "matrixdropdown",
       name: "q"+imageOrder[index]+"-3",
       width: "21em",
       title: "Please indicate which parts of the image that <i><strong>you think</strong></i> are most important to identifying the activity. <br/><i style='font-size:smaller; font-weight:normal'>Please check the box(es) corresponding to each cell on the photo that you want to select. You may select more than one box.</i>",
       defaultValue: {
        "1": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "2": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "3": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        },
        "4": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       validators: [
        {
         type: "expression",
         text: "Please select at least one cell.",
         expression: "{q"+imageOrder[index]+"-3.1.A} = true or {q"+imageOrder[index]+"-3.1.B} = true or {q"+imageOrder[index]+"-3.1.C} = true or {q"+imageOrder[index]+"-3.1.D} = true or {q"+imageOrder[index]+"-3.1.E} = true or {q"+imageOrder[index]+"-3.2.A} = true or {q"+imageOrder[index]+"-3.2.B} = true or {q"+imageOrder[index]+"-3.2.C} = true or {q"+imageOrder[index]+"-3.2.D} = true or {q"+imageOrder[index]+"-3.2.E} = true or {q"+imageOrder[index]+"-3.3.A} = true or {q"+imageOrder[index]+"-3.3.B} = true or {q"+imageOrder[index]+"-3.3.C} = true or {q"+imageOrder[index]+"-3.3.D} = true or {q"+imageOrder[index]+"-3.3.E} = true or {q"+imageOrder[index]+"-3.4.A} = true or {q"+imageOrder[index]+"-3.4.B} = true or {q"+imageOrder[index]+"-3.4.C} = true or {q"+imageOrder[index]+"-3.4.D} = true or {q"+imageOrder[index]+"-3.4.E} = true"
        }
       ],
       columns: [
        {
         name: "A"
        },
        {
         name: "B"
        },
        {
         name: "C"
        },
        {
         name: "D"
        },
        {
         name: "E"
        }
       ],
       horizontalScroll: true,
       cellType: "boolean",
       columnColCount: 4,
       rows: [
        "1",
        "2",
        "3",
        "4"
       ]
      },
      {
       type: "imagepicker",
       name: "question1_8",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/"+imageOrder[index]+"_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      },
     ]
    },
    {
     type: "panel",
     name: "panel1_3",
     elements: [
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-4",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-5",
       visible: withHeatmap,
       title: "The heatmap is helpful for me to identify the Smart Camera wearer’s activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-6",
       visible: isIntel,
       title: "I am willing to blur my wearable camera images to the level shown to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q"+imageOrder[index]+"-7",
       visible: isPrivacy,
       title: imageOrder[index]+"I am comfortable to be captured by someone else's wearable camera in a similar photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-8",
     title: "Explain why you found it easy or difficult to identify the activity.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-9",
     visible: isIntel,
     title: "Explain why you are willing or not willing to blur your images to the level shown to protect the privacy of bystanders.",
     isRequired: true,
    },
    {
     type: "text",
     name: "q"+imageOrder[index]+"-10",
     visible: isPrivacy,
     title: "Explain why you are comfortable or not comfortable to be captured in a similar photo like the one shown.",
     isRequired: true,
    }  
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   questionsOrder: "initial"
  },
  /* Post */
  {
   name: "Post Survey",
   elements: [
    {
     type: "panel",
     name: "panel66",
     elements: [
      {
       type: "text",
       name: "qP-1",
       title: "Enter your Mturk ID",
       isRequired: true
      },
      {
       type: "radiogroup",
       name: "qP-2",
       title: "Which category below includes your age?",
       isRequired: true,
       choices: [
        "18-24",
        "25-29",
        "30-39",
        "40-49",
        "50-59",
        "60 or older"
       ],
       colCount: 0
      },
      {
       type: "radiogroup",
       name: "qP-3",
       title: "What is your gender?",
       isRequired: true,
       hasOther: true,
       choices: [
        {
         value: "item1",
         text: "Female"
        },
        {
         value: "item2",
         text: "Male"
        }
       ],
       colCount: 0
      },
      {
       type: "radiogroup",
       name: "qP-4",
       title: "What is the highest level of school you have completed or the highest degree you have received?",
       isRequired: true,
       choices: [
        "Less than high school degree",
        "High school degree or equivalent (e.g., GED)",
        "Some college but no degree",
        "Associate degree",
        "Bachelor degree",
        "Graduate degree"
       ]
      },
      {
       type: "radiogroup",
       name: "qP-5",
       title: "Which of the following categories best describes your employment status?",
       isRequired: true,
       hasOther: true,
       choices: [
        "Employed",
        "Not employed",
        "Student",
        "Homemaker",
        "Retired",
        "Disabled"
       ]
      }
     ]
    },
    {
     type: "panel",
     name: "panel64",
     elements: [
      {
       type: "rating",
       name: "qP-6",
       title: "I consider myself to be a technology-savvy person.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "qP-7",
       title: "I have no problem understanding photographs.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "qP-8",
       title: "I do not like to be photographed without my knowledge.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
     ],
     title: "Do you agree or disagree with the following statements?"
    },
   ],
   visibleIf: withHeatmap?"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true \nand {q0_4.2.B} = true\nand {q0_4.3.B} = true":"{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true",
   title: "Post Survey"
  }
 ],
 showPrevButton: false,
 showQuestionNumbers: "off",
 showProgressBar: "top",
 firstPageIsStarted: true,
 completedHtml: "<h3>Thank you for completing our survey.</h3><br><h3>Your response has been recorded.</h3><br><br><br><h4>Your MTurk completion code is: "+completeCode+"</h4>",
}

var timerId = null
var timeText = null
var survey = new Survey.Model(surveyJSON);
var converter = new showdown.Converter();
var myCss = {
    matrix: {root: "table table-striped matrixtable"},
};

/* For Timer */
function renderTime(val) {
    var hours = Math.floor(val / 3600)
    var minutes = Math.floor((val - (hours*3600)) / 60)
    var seconds = Math.floor(val % 60)
    timeText = hours + ":" + minutes + ":" + seconds
}

/* For Timer */
function timerCallback() {
    /* Page4 <-> Warmup, Page7-42 correspond to Task1-18, Page43 <-> Post */
    var page = survey.currentPage
    if(!page) return
    var valueName = "PageNo" + survey.pages.indexOf(page)
    var seconds = survey.getValue(valueName)
    if(seconds == null) seconds = 0
    else seconds ++
    survey.setValue(valueName, seconds)
    renderTime(seconds)
}

/* Sending Result */
function sendDataToServer(survey) {
    survey.sendResult('4b4b863d-4716-4b18-ad18-562ddffd999c');
    // survey.sendResult('e0d67775-bf80-4ee4-b307-15fe60ab670f');        /* For debug*/
}

/* For Timer */
survey.onCurrentPageChanged.add(function(){
    timerCallback()
});

/* Sending Result */
survey.onComplete.add(function(survey, options) {
    sendDataToServer(survey)
});

/* Create showdown markdown converter
 ref: https://plnkr.co/edit/Jvou2vokWwvHG7p8TdVa?p=preview */
survey.onTextMarkdown.add(function(survey, options){
    var str = converter.makeHtml(options.text);
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    options.html = str;
});

survey.onUpdateQuestionCssClasses.add(function (survey, options) {
    var classes = options.cssClasses
});

/* For Layout */
$("#surveyContainer").Survey({ 
    model: survey,
    css: myCss
});

/* Timer */
timerCallback();
timerId = window.setInterval(function(){
  timerCallback();
}, 1000);
