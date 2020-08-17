const Error404 = {
  render: async () => {
    let view = `
    <div class="Error404">
    <h2> Error 404 </h2>
    </div>
    `
    return view;
  },
  after_render: async () => {}

}

export default Error404;