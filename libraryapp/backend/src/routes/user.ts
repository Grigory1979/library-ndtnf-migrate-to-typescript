import express from "express";
import passport from "passport";

const apiUserRouter = express.Router();

import { userLogin, userRegister, userProfile } from '../regulator/userApi';

apiUserRouter.get('/profile', userProfile);
apiUserRouter.post('/login', passport.authenticate('local', { failureMessage: 'Неправильный логин или пароль' }), userLogin);
apiUserRouter.post('/signup', userRegister);

export default apiUserRouter;