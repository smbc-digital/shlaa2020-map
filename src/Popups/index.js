const developablesitesPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Map Book Test 3</p>
  <p></p>
  <p class="info">Site Address: ${feature.properties.site_address}</p>
  <p class="info">Site Area (Ha): ${feature.properties.site_area}</p>
  <p class="info">Site Description: ${feature.properties.site_description_2020}</p>
  <p class="info">Site Capacity: ${feature.properties.capacity}</p>
  <p class="info">Delivery Years: ${feature.properties.delivery_years}</p>
  <p class="info">Assessment: ${feature.properties.assessment_text_2020}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const conservationPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-home" aria-hidden="true"></i><p class="title">Conservation Area</p>
  <p></p>
  <p class="info">Name: ${feature.properties.cons_area}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

 const planappPopup = (feature, layer) => {
  
  const content = `<div class="item"><i class="fa fa-map-o" aria-hidden="true"></i><p class="title">Tree Planning App</p>
  <p></p>
  <p class="info">Reference: ${feature.properties.refval}</p>
  <p class="info">Proposal: ${feature.properties.proposal}</p>
  <p class="info">Address: ${feature.properties.address}</p>
  <p class="info">Received Date: ${feature.properties.received_date}</p>
  <p class="info">Decision: ${feature.properties.decision}</p>
  <p class="info">Decision Date: ${feature.properties.decision_date}</p>
  
  </div>`
 
  layer.bindPopup(content)
 }

export {
  developablesitesPopup,
  conservationPopup,
  planappPopup
}