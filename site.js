
let questions = [
    {
      id: 1,
      question: "What is the full form of EOT ?",
      answer: "Electric Overhead Travelling Crane",
      options: [
        "Electric Overhead Travelling Crane",
        "Electric Outbound Train Crane",
        "Electric Overhead Transmit Crane",
        "Electric Outbound Transmit Crane"
      ]
    },
    {
      id: 2,
      question: "Embodiment design refers to",
      answer: "Product architecture",
      options: [
        "Component Design",
        "Material selection for design",
        "Product architecture",
        "Optimization of Design"
      ]
    },
    {
        id: 3,
        question: "The logical order of different activities in a design process is called as",
        answer: "Design of Morphology",
        options: [
          "Conceptual design",
          "Design Methodology",
          "Design of Morphology",
          "Optimum design"
        ]
      },
      {
        id: 4,
        question: "Find Endurance factor for hand driven",
        answer:  "0.7",
        options: [
          "0.4",
          "0.7",
          "0.5",
          "0.3"
        ]
      },
      {
        id: 5,
        question: "Find the life of rope if the number of repeated bends is 410 for a hand driven",
        answer: "292.85 months",
        options: [
         "362.46 months",
         "410.89 months",
         "300 months",
         "292.85 months"
        ]
      },
      {
        id: 6,
        question: "Identify the part which is used for upper run in belt conveyor to convey material",
        answer:  "Through idler",
        options: [
         "Hopper",
         "Cross piece",
         "Through idler",
         "tension unit"
        ]
      },
      {
        id: 7,
        question: "Three pairs of gears having drum efficiency 80%, pulley efficiency 60% and efficiency of one gear pair is 85%. So find the efficiency of Mechanism",
        answer: "32%",
        options: [
          "40%",
          "32%",
          "35%",
          "60%"
        ]
      },
      {
        id: 8,
        question: "Find out Motor input power (approx value) if output power is 14.66kW and transmission efficiency is 0.85.",
        answer: "18 kW",
        options: [
          "15 kW",
          "18 kW",
          "25 kW",
          "30 kW"
        ]
      },
      {
        id: 9,
        question: "In under running cranes, due to location of the runway beams hook height is",
        answer: "Reduced",
        options: [
          "Reduced",
          "Increased",
          "Proportional to load",
          "Remain same"
        ]
      },
    {
      id: 10,
      question: "Feasibility study involves ",
      answer:  "Effort  to seek number of feasible solution",
      options: [
        "Design for maintenece",
        "Effort  to seek number of feasible solution",
        "Formal Optimization",
        "Projection is future"
      ]
    }
  ];
  
  let question_count = 0;
  let points = 0;
  
  window.onload = function() {
    show(question_count);
  
  };
  
  function next() {
  
     
    // if the question is last then redirect to final page
    if (question_count == questions.length - 1) {
      sessionStorage.setItem("time", time);
      clearInterval(mytime);
      location.href = "end.html";
    }
    console.log(question_count);
  
    let user_answer = document.querySelector("li.option.active").innerHTML;
    // check if the answer is right or wrong
    if (user_answer == questions[question_count].answer) {
      points += 10;
      sessionStorage.setItem("points", points);
    }
    console.log(points);
  
    question_count++;
    show(question_count);
  }
  
  function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;
  
    question.innerHTML = `
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
    toggleActive();
  }
  
  function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
  