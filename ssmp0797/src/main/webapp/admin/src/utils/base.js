const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmp0797/",
            name: "ssmp0797",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmp0797/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "供电公司安全生产考试系统"
        } 
    }
}
export default base
