
var isPilot = true
var isPrivacy = (Math.random() > 0.5)
var isIntel = Boolean(1 - isPrivacy)

var condIndex = Math.floor(Math.random() * 10)
if (condIndex == 3 || condIndex == 7) condIndex--;
//condIndex = 4

var imgCond = parseInt(condIndex / 4)
var camCond = condIndex % 4
var withBlur = (imgCond != 2)
var withHeatmap = (camCond != 0)

var privacyIntro = "Since the photos are taken automatically, they inevitably capture individuals in the surrounding environment. These individuals could be family members, friends, or complete strangers, and they are typically not aware they are being photographed."


/* for debug */
console.log("isPilot: "+isPilot)
console.log("isPrivacy: "+isPrivacy)
console.log("isIntel: "+isIntel)
console.log("condIndex (of heatmap): "+condIndex)
console.log("camCond: "+camCond)
console.log("imgCond: "+imgCond)
console.log("withBlur: "+withBlur)
console.log("withHeatmap: "+withHeatmap)
/* for debug */

var surveyJSON = 
{
 pages: [
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
    }
  ]
 }, 
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
   ]
  },
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
       type: "checkbox",
       name: "question20",
       correctAnswer: [
        "Accept"
       ],
       isRequired: true,
       titleLocation: "hidden",
       choices: [
        "Accept"
       ]
      }
     ]
    }
   ]
  },
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
       html: "<p><span style=\"font-weight: 400;font-size:1.17em;\">\nNow, we will describe the Smart Wearable Cameras that automatically captures images (e.g., every 30 seconds)"+(withHeatmap || isPrivacy?"and applies smart filters":"")+". Please study the images and descriptions carefully. For the following questions, you are required to understand what activity the camera is photographing.\n</span></p>\n<p><span style=\"font-weight: 400;font-size:1.17em;\">\nThe following are some examples of photos taken from the Smart Wearable Camera. Note how photos are taken from the chest level and represent various <strong>activities that the wearer is doing</strong>, such as socializing and talking, or walking  outdoors.\n</span></p>"
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
       // width: "60%",
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
       colCount: 2,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220,
       showLabel: true
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "14%",
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
   ]
  },
  {
   name: "WarmUp",
   elements: [
    {
     type: "html",
     name: "question39",
     html: "<h3 style=\"font-weight:500;\">Warm-up: Screening questions </h3>"
    },
    {
     type: "panel",
     name: "panel2",
     elements: [
      {
       type: "imagepicker",
       name: "question15",
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
       name: "question18",
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
       width: "50%",
       title: "Which of the following grid cells contain the computer screen? (Hint: at least 4 grids.)",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
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
        4,
        5
       ],
       cellType: "boolean",
       rows: [
        "1",
        "2",
        "3",
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question16",
       width: "30%",
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
       width: "50%",
       title: "According to the heatmap, which grid cells are most important? (Hint: at least 1 grid.)",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
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
        4,
        5
       ],
       cellType: "boolean",
       rows: [
        "1",
        "2",
        "3",
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question31",
       width: "30%",
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
       name: "question48",
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
  {
   name: "Screening",
   elements: [
    {
     type: "html",
     name: "question13",
     html: "<h3 style=\"font-weight:500;\">Sorry! You do not qualify to continue with the study.</h3> <h3 style=\"font-weight:500;\">Thank you for your interest! </h3>\n\n"
    }
   ],
   visibleIf: "not({q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true)",
   questionsOrder: "initial"
  },
  {
   name: "Survey Instruction",
   elements: [
    {
     type: "html",
     name: "question1",
     html: "<h3 style=\"font-weight:500;\">Next, you will see a series 15 of images and answer several questions for each image. There are 15 pages and 1 page for each image. </h3> \n<p>&nbsp;</p>\n<h4 style=\"font-weight: 500;color:red;\"> Please put your best effort to answer the questions <strong>accurately</strong> and <strong>quickly</strong>. For correct and quick answers, you can receive a bonus up to US$1.5. </h4>\n\n\n"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 1",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 1 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/00_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/00_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q1-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q1-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q1-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q1-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/00_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q1-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q1-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q1-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q1-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q1-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q1-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q1-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q1-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 2",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 2 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/46_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/46_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q2-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q2-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q2-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q2-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/46_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q2-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q2-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q2-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q2-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q2-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q2-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q2-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q2-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 3",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 3 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/32_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/32_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q3-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q3-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q3-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q3-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/32_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q3-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q3-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q3-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q3-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q3-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q3-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q3-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q3-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 4",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 4 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/19_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/19_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q4-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q4-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q4-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q4-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/19_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q4-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q4-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q4-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q4-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q4-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q4-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q4-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q4-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },

  {
   name: "Task 5",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 5 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/35_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/35_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q5-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q5-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q5-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q5-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/35_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q5-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q5-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q5-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q5-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q5-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q5-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q5-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q5-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 6",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 6 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/40_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/40_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q6-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q6-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q6-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q6-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/40_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q6-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q6-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q6-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q6-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q6-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q6-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q6-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q6-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 7",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 7 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/41_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/41_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q7-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q7-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q7-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q7-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/41_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q7-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q7-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q7-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q7-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q7-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q7-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q7-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q7-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 8",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 8 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/10_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/10_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q8-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q8-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q8-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q8-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/10_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q8-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q8-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q8-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q8-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q8-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q8-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q8-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q8-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },


  {
   name: "Task 9",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 9 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/05_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/05_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q9-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q9-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q9-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q9-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/05_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q9-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q9-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q9-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q9-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q9-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q9-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q9-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q9-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 10",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 10 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/52_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/52_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q10-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q10-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q10-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q10-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/52_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q10-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q10-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q10-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q10-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q10-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q10-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q10-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q10-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 11",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 11 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/01_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/01_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q11-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q11-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q11-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q11-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/01_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q11-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q11-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q11-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q11-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q11-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q11-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q11-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q11-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 12",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 12 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/47_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/47_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q12-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q12-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q12-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q12-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/47_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q12-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q12-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q12-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q12-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q12-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q12-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q12-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q12-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },

  {
   name: "Task 13",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 13 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/33_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/33_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q13-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q13-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q13-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q13-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/33_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q13-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q13-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q13-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q13-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q13-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q13-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q13-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q13-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 14",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 14 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/20_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/20_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q14-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q14-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q14-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q14-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/20_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q14-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q14-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q14-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q14-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q14-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q14-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q14-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q14-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },
  {
   name: "Task 15",
   elements: [
    {
     type: "html",
     name: "question42",
     html: "<h3 style=\"font-weight:500;\">Task 15 </h3>"
    },
    {
     type: "panel",
     name: "panel6",
     elements: [
      {
       type: "html",
       name: "question22",
       visible: isIntel,
       html: "<h4 style=\"font-weight:500;\">Imagine you have been wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken some time ago. </h4> "
      },
      {
       type: "html",
       name: "question23",
       visible: isPrivacy,
       html: "<h4 style=\"font-weight:500;\">Imagine you are somewhere and someone nearby is wearing a wearable camera that takes photos automatically every 30 seconds. The following is one of the photos taken. </h4> "
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/36_img.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question5",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/cam"+condIndex+"/36_cam.png"
        }
       ],
       visible: withHeatmap,
       imageFit: "fill",
       imageHeight: 160,
       imageWidth: 220
      },
      {
       type: "imagepicker",
       name: "question48",
       width: "13%",
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
      {
       type: "matrix",
       name: "q15-1",
       visible: isIntel,
       width: "90%",
       title: "Which activity do you think you were doing when the Smart Camera took the photo? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
      {
       type: "matrix",
       name: "q15-2",
       visible: isPrivacy,
       width: "90%",
       title: "Which activity do you think the Smart Camera wearer was doing? (Hint: it is one of the following activities and you must select at least one activity as NOT very unlikely.)",
       defaultValue: {
        "Walking Outdoors": "1 (Very Unlikely)",
        Biking: "1 (Very Unlikely)",
        Eating: "1 (Very Unlikely)",
        "Public Transport": "1 (Very Unlikely)",
        Shopping: "1 (Very Unlikely)",
        "Talking and Socializing": "1 (Very Unlikely)",
        "Watching TV": "1 (Very Unlikely)",
        "Cleaning and chores": "1 (Very Unlikely)",
        Cooking: "1 (Very Unlikely)"
       },
       isRequired: true,
       columns: [
        "1 (Very unlikely)",
        "2",
        "3",
        "4 (Neither Unlikely nor Likely)",
        "5",
        "6",
        "7 (Very likely)"
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
       horizontalScroll: false,
       isAllRowRequired: true
      },
     ]
    },
    {
     type: "panel",
     name: "panel7",
     elements: [
      {
       type: "text",
       name: "q15-3",
       title: "In a few words, specify how you identified the activity."
      },
      {
       type: "html",
       name: "question27",
       html: "\n<p style=\"font-size:14px;\"><strong>Please indicate which parts of the image that <i>you think</i> are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell. </strong></p>"
      },
      {
       type: "matrixdropdown",
       name: "q15-4",
       width: "55%",
       title: "Please indicate which parts of the image that you think are most relevant to identifying the activity. Select checkboxes corresponding to the grid cell that you identify. You can select more than 1 cell.",
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
        "5": {
         A: false,
         B: false,
         C: false,
         D: false,
         E: false
        }
       },
       isRequired: true,
       titleLocation: "hidden",
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
        "4",
        "5"
       ]
      },
      {
       type: "imagepicker",
       name: "question28",
       width: "35%",
       startWithNewLine: false,
       titleLocation: "hidden",
       choices: [
        {
         value: "item1",
         imageLink: "figures/img"+imgCond+"/36_grid.png"
        }
       ],
       imageFit: "fill",
       imageHeight: 180,
       imageWidth: 245
      }
     ]
    },
    {
     type: "panel",
     name: "panel8",
     elements: [
      {
       type: "rating",
       name: "q15-5",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q15-6",
       title: "I do not mind storing my images blurred to the level shown, in order to protect the privacy of bystanders.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q15-7",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isIntel,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel34",
     elements: [
      {
       type: "rating",
       name: "q15-8",
       title: "It is easy to identify the wearer’s activity in the photo.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q15-9",
       title: "I do not mind being captured in a wearable camera photo like the one shown.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "text",
       name: "q15-10",
       visible: true,
       title: "In a few words, explain your selection (i.e., why you agree or disagree with the statement)."
      }
     ],
     visible: isPrivacy,
     title: "Do you agree or disagree with the following statements?"
    },
    {
     type: "panel",
     name: "panel69",
     elements: [
      {
       type: "rating",
       name: "q15-11",
       title: "I can understand the heatmap well.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      },
      {
       type: "rating",
       name: "q15-12",
       title: "The heatmap is helpful for me to identify the activity.",
       isRequired: true,
       rateMin: -3,
       rateMax: 3,
       minRateDescription: "Strongly disagree",
       maxRateDescription: "Strongly agree"
      }
     ],
     visible: withHeatmap,
     title: "Do you agree or disagree with the following statements?"
    }
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   questionsOrder: "initial"
  },

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
     // visible: isIntel,
     title: "Do you agree or disagree with the following statement?"
    },
   ],
   visibleIf: "{q0_1} = \"Bus\" \nand {q0_2} = \"Riding a bike\" \nand {q0_3.2.C} = true\nand {q0_3.2.D} = true\nand {q0_3.3.C} = true \nand {q0_3.3.D} = true",
   title: "Post Survey"
  }
 ],
 showPrevButton: false,
 showQuestionNumbers: "off",
 showProgressBar: "top",
 firstPageIsStarted: true
}

function sendDataToServer(survey) {
    survey.sendResult('4b4b863d-4716-4b18-ad18-562ddffd999c');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});