 {/* <form>
 <input   
// type="text" 
// value={searchTerm}
// onChange={this.onSearchChange}/>
// </form>

//         {/* {this.state.list.filter(isSearched(this.state.searchTerm)).map(item => */}
          {/*list.filter(isSearched(searchTerm)).map(item =>
//         <div key={item.objectID}>
//         <span>
//         <a href={item.url}>{item.title}</a>
//         </span>
//         <span>{item.author}</span>
//         <span>{item.num_comments}</span>
//         <span>{item.points}</span>
//         <span>
//         <button
//         onClick={() => this.onDismiss(item.objectID)}
//         type="button"
//         >
//         Отбросить
//         </button>
//         </span>
//         </div>
//         )}
//         </div>
//         );
//         }
//         }

  // class App extends Component {
//   render() {
//   const helloWorld = 'Добро пожаловать в Путь к изучению React';
//   return (
//   <div className="App">
//   <h2>{helloWorld}</h2>
//   </div>
//   );
//   }
//   } */}

// function Search(props) {
//   const { value, onChange, children } = props;
//   return (
//   <form>
//   {children} <input
//   type="text"
//   value={value}
//   onChange={onChange}
//   />
//   </form>
// );
// }

//   class Table extends Component {
//     render() {
//     const { list, pattern, onDismiss } = this.props;
//     return (
//     <div>
//     {list.filter(isSearched(pattern)).map(item =>
//     <div key={item.objectID}>
//     <span>
//     <a href={item.url}>{item.title}</a>
//     </span>
//     <span>{item.author}</span>
//     <span>{item.num_comments}</span>
//     <span>{item.points}</span>
//     <span>
//     <Button onClick={() => onDismiss(item.objectID)}>
// Отбросить
// </Button>
//     </span>
//     </div>
//     )}
//     </div>
//     );
//     }
//     }


// class Search extends Component {
//   render() {
//   const { value, onChange,children } = this.props;
//   return (
//   <form>
//   {children}<input
//   type="text"
//   value={value}
//   onChange={onChange}
//   />
//   </form>
//   );
//   }
//   }



    // class Button extends Component {
    //   render() {
    //   const {
    //   onClick,
    //   className='',
    //   children,
    //   } = this.props;
    //   return (
    //   <button
    //   onClick={onClick}
    //   className={className}
    //   type="button"
    //   >
    //   {children}
    //   </button>
    //   );
    //   }
    //   }



    // function Table(props) {
    //   const { list, pattern, onDismiss } = props;
    //   return (
    //  <div>
    //     {list.filter(isSearched(pattern)).map(item =>
    //      <div key={item.objectID}>
    //      <span>
    //      <a href={item.url}>{item.title}</a>
    //      </span>
    //      <span>{item.author}</span>
    //     <span>{item.num_comments}</span>
    //      <span>{item.points}</span>
    //      <span>
    //      <Button onClick={() => onDismiss(item.objectID)}>
    //  Отбросить
    //  </Button>
    //      </span>
    //      </div>
    //      )}
    //      </div>
    // );
    // }

    // function Button(props) {
    //     const {
    //       onClick,
    //       className='',
    //       children,
    //       } = props;
    //     return (
    //       <button
    //       onClick={onClick}
    //       className={className}
    //       type="button"
    //       >
    //       {children}
    //       </button>
    //   );
    //   }