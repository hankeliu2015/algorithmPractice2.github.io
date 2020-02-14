const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
  // console.log(this.dataset)   // input element value attribute

  // need setup suffice for each of the input.

  let suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
