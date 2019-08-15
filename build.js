const njk = require("nunjucks");
const fs = require("fs");
const TMPL_PATH = "resume.njk";
const RESUME_PATH = "resume.html";

function build_resume() {
    fs.writeFileSync(RESUME_PATH, njk.render(TMPL_PATH));
}

build_resume();
