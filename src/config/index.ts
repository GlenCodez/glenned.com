const AppConfig = {
    api: {
      base: process.env.API_BASE || "http://localhost:8000/v1"
    },
    home: {
        codeBox1: {
            variableName: "name",
            first: "Glen",
            last: "Burchfield"
        },
        codeBox2: {
            variableName: "profile",
            profession: "Software Engineer",
            proficient: "Node.js"
        }
    }
}

export default AppConfig