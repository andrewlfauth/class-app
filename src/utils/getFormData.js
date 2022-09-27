export default function getFormData(e) {
  e.preventDefault()

  let form = e.target
  let inputs = [...form.elements]
  let valuesArr = inputs.map((i) => {
    let name = i.name
    return { [name]: i.value }
  })

  return Object.assign({}, ...valuesArr)
}
