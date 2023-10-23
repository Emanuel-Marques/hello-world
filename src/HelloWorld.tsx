import Title from './Title';
import ModuleDetails from './ModuleDetails';
import age from './utils/age';

const user = {
  name: 'Emanuel Marques',
  birthdayDate: '06/08/2001',
};

export default function helloWorld() {
  return (
    <>
      <Title />
      <ModuleDetails />
      {' '}
      { `O usuário ${user.name} tem ${age(user.birthdayDate)} anos.` }
    </>
  );
}
