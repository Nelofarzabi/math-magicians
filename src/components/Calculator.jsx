import Button from './Button';
import Field from './Field';
import './styles/calculator.css';

export default function Calculator() {
  return (
    <>
      <div className="container">
        <Field />
        <Button />
      </div>
    </>
  );
}
