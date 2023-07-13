#!node
const packJson = require("./package.json");
const welcome = require("cli-welcome");
const colors = require("colors/safe");

const twitterColor = colors.bgBrightBlue;
const githubColor = colors.bgBrightGreen;
const linkedlinColor = colors.bgBrightCyan;

welcome({
  title: `Get to know Arjun`,
  tagLine: `Howdy , nice to meet ya!`,
  version: packJson.version,
  bgColor: `#0275d8	`,
  color: `#000000`,
  bold: true,
  clear: false,
});

console.log(colors.random("Arjun Kumar Singh"));
console.log(`
 
${colors.italic(`Welcome to my blog! In this post, I am thrilled to introduce myself,Arjun Kumar Singh, a dedicated and enthusiastic .NET developer. With 
a passion for coding and a strong background in software development,I am excited to share my journey and experiences in the world of 
technology. Join me as we explore the fascinating world of .NET and beyond!`)}

${colors.dim(
  "Beyond the world of programming, I am deeply passionate about continuously learning and staying up-to-date with the latest advancements in technology."
)}
 

🐤 ${twitterColor(" Twitter:   ")}  ${colors.underline(
  `https://twitter.com/arjun4512`
)}

🐈 ‍${githubColor(" GitHub:    ")}  ${colors.underline(
  "https://github.com/arjun4512"
)}

🔗 ${linkedlinColor(" Linkedlin: ")} ${colors.underline(
  "https://linkedli.com/arjun.kumar.singh"
)} 
`);
console.log(`
             ✅ ${colors.bgGreen(" Success: ")} ${colors.bold(
  "Thanks for the checking out my cli."
)}

              ℹ️ ${colors.bgBlue(
                " info:    "
              )}    I am creating a lots of nodeJs cli tools for more info connect with me through Social media.

             ⚠️  ${colors.bgYellow(" Warn:    ")}    ${colors.bold(
  "Please dont copy me. Be yourself."
)}

             ❌ ${colors.bgRed(
               " Error:   "
             )}   I'm on vacation. Contact me next week.
`);
