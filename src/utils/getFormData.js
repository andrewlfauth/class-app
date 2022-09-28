export default function getFormData(e) {
  e.preventDefault()

  let form = e.target
  let inputs = [...form.elements]
  let valuesArr = inputs.map((i) => {
    let name = i.name

    return name ? { [name]: i.value } : null
  })

  return Object.assign({}, ...valuesArr)
}
