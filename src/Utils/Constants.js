import XQuery from './xquery.png';
import SVN from './svn.png';
import Marklogic from './Marklogic.jpg';
import Postgres from './postgres.png';

const myConstants = {
    progLang : {Python: ["https://s3.amazonaws.com/staticwebsiteaman/python.jpeg","Proficient"],
        Java: ["https://s3.amazonaws.com/staticwebsiteaman/java.png","Proficient"],
        JavaScript: ["https://s3.amazonaws.com/staticwebsiteaman/js.png","Intermediate"],
        XQuery: [XQuery,"Proficient"]
    },
    webDev : {ReactJs: ["https://s3.amazonaws.com/staticwebsiteaman/react.png","Proficient"],
        Redux: ["https://s3.amazonaws.com/staticwebsiteaman/redux.png","Intermediate"],
        Angular: ["https://s3.amazonaws.com/staticwebsiteaman/angular.png","Intermediate"],
        NodeJS: ["https://s3.amazonaws.com/staticwebsiteaman/node1.png","Proficient"]
    },
    databases : {MarkLogic: [Marklogic,"Proficient"],
        PostgreSQL: [Postgres,"Intermediate"],
        MongoDB: ["https://s3.amazonaws.com/staticwebsiteaman/mongo.png","Proficient"],
        MySQL: ["https://s3.amazonaws.com/staticwebsiteaman/mysql.png","Proficient"]
    },
    tools : {JIRA: ["https://s3.amazonaws.com/staticwebsiteaman/jira.png","Proficient"],
        Jenkins: ["https://s3.amazonaws.com/staticwebsiteaman/jenkins.png","Intermediate"],
        Git: ["https://s3.amazonaws.com/staticwebsiteaman/git.png","Proficient"],
        SVN: [SVN,"Proficient"]
    }
};

export default myConstants;