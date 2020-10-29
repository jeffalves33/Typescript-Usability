//here we will use the expresse typing to exemplify the typescript
import { Request, Response } from 'express';
import createUser from './services/CreateUser';

//string, number, boolean, object, Array,...
//interfaces

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        email: 'luiz_cleidi@hotmail.com',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            {title: 'javaScript', experience: 100},
        ],
    });

    return response.json({ message: 'Hello World' });
}