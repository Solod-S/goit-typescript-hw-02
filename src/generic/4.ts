/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  readonly title: string;
  // [propName: string]: string | number;
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class Page extends Component<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
