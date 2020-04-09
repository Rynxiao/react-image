import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

enzyme.configure({ adapter: new Adapter() });
