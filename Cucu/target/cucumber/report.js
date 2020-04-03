$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Cats.feature");
formatter.feature({
  "name": "Для котов",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Имя кота",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "У меня есть кот",
  "keyword": "Given "
});
formatter.match({
  "location": "CatsGlue.java:7"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "йцукег",
  "keyword": "And "
});
formatter.match({
  "location": "CatsGlue.java:16"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "У кота нет имени",
  "keyword": "When "
});
formatter.match({
  "location": "CatsGlue.java:10"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "йцукег",
  "keyword": "And "
});
formatter.match({
  "location": "CatsGlue.java:16"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Дать имя коту",
  "keyword": "Then "
});
formatter.match({
  "location": "CatsGlue.java:13"
});
formatter.result({
  "status": "passed"
});
});