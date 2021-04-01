const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
      sex: "male",
    },
  ],
};

const Item = ({ user }) => (
  <div className="userInfo">
    <h1>Użytkownik {user.name}</h1>
    <p>Informacje o użytkowniku:</p>
    <p>
      Wiek użytkownika: <strong>{user.age}</strong>
    </p>
    <p>Płeć użytkownika: {user.sex}</p>
  </div>
);

class ListItems extends React.Component {
  state = {
    select: "all",
  };

  handleFilter(option) {
    this.setState({
      select: option,
    });
  }

  usersList = () => {
    let users = this.props.data.users;

    switch (this.state.select) {
      case "all":
        return users.map((user) => <Item key={user.id} user={user} />);
      default:
        users = users.filter((user) => user.sex === this.state.select);
        return users.map((user) => <Item key={user.id} user={user} />);
    }
  };

  render() {
    return (
      <>
        <button onClick={this.handleFilter.bind(this, "all")}>Wszyscy</button>
        <button onClick={this.handleFilter.bind(this, "female")}>Kobiety</button>
        <button onClick={this.handleFilter.bind(this, "male")}>Mężczyźni</button>
        {this.usersList()}
      </>
    );
  }
}

ReactDOM.render(<ListItems data={data} />, document.querySelector(`#root`));
