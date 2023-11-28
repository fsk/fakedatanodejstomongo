import {faker} from '@faker-js/faker';
import User from '../collections/User.js'

const generatePost = (num) => {
    const user = [];

    for (let i = 0; i < num; i++) {
        const userName = faker.person.firstName();
        const userLastname = faker.person.lastName();
        const userEmail = faker.internet.email();
        const userDescription = faker.lorem.text();
        const userDepartment = faker.commerce.department();
        const userAvatarGithub = faker.image.avatarGitHub()

        user.push({
            userName,
            userLastname,
            userEmail,
            userDescription,
            userDepartment,
            userAvatarGithub,
        });
    }

    return user;
}


const setData = async (req, res) => {
    const userArr = generatePost(req.params.fakeDataNumber);
    User.insertMany(userArr)
        .then(docs => console.log(`${docs.length} users have been inserted into the database.`))
        .catch(err => {
            console.error(err);
            console.error(`${err.writeErrors?.length ?? 0} errors occurred during the insertMany operation.`);
        });

    const resJson = {
        message: "Created Your Fake Data. Check DB",
        data: userArr
    }

    res.status(201).json(resJson);
}

export {setData}