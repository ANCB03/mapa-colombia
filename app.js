var map;

function mapaColombia(urlData){
  if (!map) {
     map = new Datamap({
        element: document.getElementById('colombia'),
        scope: 'colombia',
        responsive: true, //if true, call `resize()` on the map object when it should adjust it's size
        done: function() {}, //callback when the map is done drawing
    
        //dataType: 'csv', //for use with dataUrl, currently 'json' or 'csv'. CSV should have an `id` column
        //dataUrl: '', //if not null, datamaps will attempt to fetch this based on dataType ( default: json )
        dataType: 'csv',
        dataUrl: urlData,
        data: {},
    
        fills: {
            'def': '#dddddd',
            'C1': '#ffa4a9',
            'C2': '#cc6674',
            'C3': '#993341',
            'C4': '#66000e',
            defaultFill: '#dddddd'
        },
    
        geographyConfig: {
          dataUrl: 'colombia.topo.json',
          //dataJson: topoJsonData
          hideAntarctica: true,
          borderWidth: 1,
          borderOpacity: 1,
          borderColor: '#FDFDFD',
          popupTemplate: function(geography, data) { //this function should just return a string
            //return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
            //'<tr><td class="text-secondary">Curados: </td><td class="text-success">' +  data.curados + '</td></tr>',
            //console.log(geography.properties)
            //console.log(data)
            
            var html = '';

            if (urlData === 'col-data1.csv') {
              html += '<div class="modal-body"><table class="table text-left"><tbody>';
              html += '<tr><td class="text-secondary">Actividad Economica</td><td class="text-danger">' + data.act + '</td></tr>';
              html += '</tbody></table></div>';
            } else if (urlData === 'col-data2.csv' || urlData === 'col-data3.csv') {
              html += '<div class="modal-body"><table class="table text-left"><tbody>';
              html += '<tr><td class="text-secondary">2005</td><td class="text-danger">' + data.a2005 + '</td></tr>';
              html += '<tr><td class="text-secondary">2006: </td><td class="text-dark">' + data.a2006 + '</td></tr>';
              html += '<tr><td class="text-secondary">2007: </td><td class="text-success">' + data.a2007 + '</td></tr>';
              html += '<tr><td class="text-secondary">2008 </td><td class="text-success">' + data.a2008 + '</td></tr>';
              html += '<tr><td class="text-secondary">2009 </td><td class="text-success">' + data.a2009 + '</td></tr>';
              html += '<tr><td class="text-secondary">2010 </td><td class="text-success">' + data.a2010 + '</td></tr>';
              html += '<tr><td class="text-secondary">2011 </td><td class="text-success">' + data.a2011 + '</td></tr>';
              html += '<tr><td class="text-secondary">2012 </td><td class="text-success">' + data.a2012 + '</td></tr>';
              html += '<tr><td class="text-secondary">2013 </td><td class="text-success">' + data.a2013 + '</td></tr>';
              html += '</tbody></table></div>';
            }
  
            // Update modal content
            document.getElementById('modalTitle').innerText = geography.properties.name;
            document.getElementById('modalBody').innerHTML = html;
  
            // Show modal
            setTimeout(function() {
              $('#infoModal').modal('show');
            }, 550);
  
            return '';
                
              
            
          },
    
          popupOnHover: true, //disable the popup while hovering
          highlightOnHover: true,
          highlightFillColor: '#ff7d03',
          highlightBorderColor: 'rgba(0, 0, 0, 0.6)',
          highlightBorderWidth: 1,
          highlightBorderOpacity: 1
        },
    
        setProjection: function (element) {
    
            var projection = d3.geo.mercator()
                .center([-74,3]) // always in [East Latitude, North Longitude]
                //.center([4.570868,-74.2973328]) // always in [East Latitude, North Longitude]
                .scale(element.offsetWidth*3.7)
                .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
            var path = d3.geo.path().projection(projection);
            return { path: path, projection: projection };
        }
    });
    

    window.addEventListener('resize', function(event){
        map.resize();
    });
    
    $(document).ready(function() {
        setTimeout(function(){
            $('body').addClass('loaded');
            $('h1').css('color','#222222');
        }, 1000);
      //$('#exampleModalCenter').modal('show');
    });
  }   else {
    d3.csv(urlData, function (newData) {
      var dataObject = {};
      newData.forEach(function (d) {
        dataObject[d.id] = d;
      });
      map.updateChoropleth(dataObject);
      map.options.geographyConfig.popupTemplate = function (geography, data) {
        var html = '';

        if (urlData === 'col-data1.csv') {
          html += '<div class="modal-body"><table class="table text-left"><tbody>';
          html += '<tr><td class="text-secondary">Actividad Economica</td><td class="text-danger">' + data.act + '</td></tr>';
          html += '</tbody></table></div>';
        } else if (urlData === 'col-data2.csv' || urlData === 'col-data3.csv') {
          html += '<div class="modal-body"><table class="table text-left"><tbody>';
          html += '<tr><td class="text-secondary">2005</td><td class="text-danger">' + data.a2005 + '</td></tr>';
          html += '<tr><td class="text-secondary">2006: </td><td class="text-dark">' + data.a2006 + '</td></tr>';
          html += '<tr><td class="text-secondary">2007: </td><td class="text-success">' + data.a2007 + '</td></tr>';
          html += '<tr><td class="text-secondary">2008 </td><td class="text-success">' + data.a2008 + '</td></tr>';
          html += '<tr><td class="text-secondary">2009 </td><td class="text-success">' + data.a2009 + '</td></tr>';
          html += '<tr><td class="text-secondary">2010 </td><td class="text-success">' + data.a2010 + '</td></tr>';
          html += '<tr><td class="text-secondary">2011 </td><td class="text-success">' + data.a2011 + '</td></tr>';
          html += '<tr><td class="text-secondary">2012 </td><td class="text-success">' + data.a2012 + '</td></tr>';
          html += '<tr><td class="text-secondary">2013 </td><td class="text-success">' + data.a2013 + '</td></tr>';
          html += '</tbody></table></div>';
        }

        // Update modal content
        document.getElementById('modalTitle').innerText = geography.properties.name;
        document.getElementById('modalBody').innerHTML = html;

        // Show modal
        setTimeout(function() {
          $('#infoModal').modal('show');
        }, 550);

        return '';
      };
    });
  }
}

function actividadesEcon(){
  mapaColombia('col-data1.csv');
}

function PIBPreciosCorrientes(){
  mapaColombia('col-data2.csv');
}

function PIBPorcentaje(){
  mapaColombia('col-data3.csv');
}

function PIBPerCapital(){
  mapaColombia('col-data4.csv');
}