import express from 'express';
const router = express.Router();
import { protect } from '../middleware/auth.js';

import {
  signup,
  login,
  auth,
  getUserById,
  checkIfVoted,
  checkIfVotedQAquestion,
  postAnswerIdinUser,
  postQAquestionIdinUser,
} from '../controllers/userCtrl.js';

router.route('/signup').post(signup);

router.route('/login').post(login);

router.route('/auth').get(protect,auth);

router.route('/getUserById/:id').get(getUserById);

router.route('/checkIfVoted/:answerId').get(protect, checkIfVoted);

router
  .route('/checkIfVotedQAquestion/:questionId')
  .get(protect, checkIfVotedQAquestion);

router.route('/postAnswerIdinUser/:answerId').post(protect, postAnswerIdinUser);

router
  .route('/postQAquestionIdinUser/:QAquestionId')
  .post(protect, postQAquestionIdinUser);
export default router;
