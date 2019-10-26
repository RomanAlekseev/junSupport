import React from "react";
import CodeExample from "../CodeExample";

function Example() {
  return (
    <div className="materials-content col-md-8">
      <p className="mini-menu">
        <a href="#">Материалы</a> / <a href="">Вопрсосы с собеседований</a> /{" "}
        <a href="#">контекст</a>
      </p>
      <h2 className="mat-title">Input group</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minima
        deleniti eligendi natus molestias, quas, voluptates consectetur
        doloremque magnam, laboriosam libero inventore blanditiis. Minima
        voluptas dignissimos repellendus, eos nostrum doloremque omnis
        reiciendis voluptatem error facilis architecto assumenda corrupti,
        officiis necessitatibus amet cum ad illum iusto ipsa quo ducimus
        perferendis voluptates?
      </p>

      <p>Lorem ipsum dolor sit amet.</p>
      <ul>
        <li>4afa</li>
        <li>4asdfasf</li>
        <li>4afasfds</li>
        <li>4asfsf</li>
        <li>4afasfda</li>
      </ul>
      <h2>sub title</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nam
        cupiditate quasi ratione, a magni et ut rerum quod eum!
      </p>
      <div>
        <CodeExample />
      </div>
    </div>
  );
}

export default Example;
