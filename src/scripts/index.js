import '../styles/index.css';
import { Model } from './Model';
import { View } from './View';
import { Controller } from './Controller';


if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const app = new Controller(new Model(), new View())


