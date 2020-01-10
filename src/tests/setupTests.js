import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DoEnv from 'dotenv';

DotEnv.config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
});

