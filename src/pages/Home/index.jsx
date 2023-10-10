import { AddTodo, ListTodo, UpdateTodo } from '../../components/home';

const Home = () => {
  return (
    <div>
      <AddTodo />
      <ListTodo />
      <UpdateTodo />
    </div>
  );
};

export default Home;
