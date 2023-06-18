import { Radio } from './index';

export default {
  title: 'Radio Button',
  component: Radio,
};

export const Normal = () => (
  <form>
    <Radio text="First Choice" name="primary" />
    <Radio text="Second Choice" name="primary" />
  </form>
);
