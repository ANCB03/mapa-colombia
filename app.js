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
            'C1': '#FF5733',
            'C2': '#FFC300',
            'C3': '#C70039',
            'C4': '#900C3F',
            'C5': '#581845',
            'C6': '#7D3C98',
            'C7': '#2874A6',
            'C8': '#F1C40F',
            'C9': '#2ECC71',
            'C10': '#1ABC9C',
            'C11': '#16A085',
            'C12': '#27AE60',
            'C13': '#3498DB',
            'C14': '#2980B9',
            'C15': '#8E44AD',
            'C16': '#9B59B6',
            'C17': '#34495E',
            'C18': '#2C3E50',
            'C19': '#F39C12',
            'C20': '#E67E22',
            'C21': '#D35400',
            'C22': '#BDC3C7',
            'C23': '#95A5A6',
            'C24': '#7F8C8D',
            'C25': '#1F618D',
            'C26': '#2E86C1',
            'C27': '#5499C7',
            'C28': '#7FB3D5',
            'C29': '#AED6F1',
            'C30': '#D6EAF8',
            'C31': '#F8C471',
            'C32': '#FAD7A0',
            'C33': '#FDEBD0',
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
              if(geography.id === 'CUN'){
                html += '<tr><td class="text-secondary">Actividad Economica Bogotá</td><td class="text-danger">' + "*Servicios financieros *Comercio,  *Sector manufacturero" + '</td></tr>';
              }
              html += '</tbody></table></div>';
            } else if (urlData === 'col-data2.csv' || urlData === 'col-data3.csv') {
              html += '<div class="modal-body"><table class="table text-left"><tbody>';
              html += '<tr>';
              html += '<td class="text-secondary">2005:</td><td class="text-success">' + data.a2005 + '</td>';
              html += '<td class="text-secondary">2006:</td><td class="text-success">' + data.a2006 + '</td>';
              html += '<td class="text-secondary">2007:</td><td class="text-success">' + data.a2007 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2008:</td><td class="text-success">' + data.a2008 + '</td>';
              html += '<td class="text-secondary">2009:</td><td class="text-success">' + data.a2009 + '</td>';
              html += '<td class="text-secondary">2010:</td><td class="text-success">' + data.a2010 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2011:</td><td class="text-success">' + data.a2011 + '</td>';
              html += '<td class="text-secondary">2012:</td><td class="text-success">' + data.a2012 + '</td>';
              html += '<td class="text-secondary">2013:</td><td class="text-success">' + data.a2013 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2014:</td><td class="text-success">' + data.a2014 + '</td>';
              html += '<td class="text-secondary">2015:</td><td class="text-success">' + data.a2015 + '</td>';
              html += '<td class="text-secondary">2016:</td><td class="text-success">' + data.a2016 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2017:</td><td class="text-success">' + data.a2017 + '</td>';
              html += '<td class="text-secondary">2018:</td><td class="text-success">' + data.a2018 + '</td>';
              html += '<td class="text-secondary">2019:</td><td class="text-success">' + data.a2019 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2020:</td><td class="text-success">' + data.a2020 + '</td>';
              html += '<td class="text-secondary">2021:</td><td class="text-success">' + data.a2021 + '</td>';
              html += '<td class="text-secondary">2022:</td><td class="text-success">' + data.a2022 + '</td>';
              html += '</tr></tbody></table></div>';
              
            }else if(urlData === 'col-data4.csv'){
              html += '<div class="modal-body"><table class="table text-left"><tbody>';
              html += '<tr>';
              html += '<td class="text-secondary">2000:</td><td class="text-success">' + data.a2000 + '</td>';
              html += '<td class="text-secondary">2001:</td><td class="text-success">' + data.a2001 + '</td>';
              html += '<td class="text-secondary">2002:</td><td class="text-success">' + data.a2002 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2003:</td><td class="text-success">' + data.a2003 + '</td>';
              html += '<td class="text-secondary">2004:</td><td class="text-success">' + data.a2004 + '</td>';
              html += '<td class="text-secondary">2005:</td><td class="text-success">' + data.a2005 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2006:</td><td class="text-success">' + data.a2006 + '</td>';
              html += '<td class="text-secondary">2007:</td><td class="text-success">' + data.a2007 + '</td>';
              html += '<td class="text-secondary">2008:</td><td class="text-success">' + data.a2008 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2009:</td><td class="text-success">' + data.a2009 + '</td>';
              html += '<td class="text-secondary">2010:</td><td class="text-success">' + data.a2010 + '</td>';
              html += '<td class="text-secondary">2011:</td><td class="text-success">' + data.a2011 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2012:</td><td class="text-success">' + data.a2012 + '</td>';
              html += '<td class="text-secondary">2013:</td><td class="text-success">' + data.a2013 + '</td>';
              html += '<td class="text-secondary">2014:</td><td class="text-success">' + data.a2014 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2015:</td><td class="text-success">' + data.a2015 + '</td>';
              html += '<td class="text-secondary">2016:</td><td class="text-success">' + data.a2016 + '</td>';
              html += '</tr></tbody></table></div>';
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
         
          if(geography.id === 'CUN'){
            html += '<tr><td class="text-secondary">Actividad Economica Bogotá</td><td class="text-danger">' + "*Servicios financieros *Comercio,  *Sector manufacturero" + '</td></tr>';
          }
          html += '</tbody></table></div>';
        } else if (urlData === 'col-data2.csv' || urlData === 'col-data3.csv') {
          html += '<div class="modal-body"><table class="table text-left"><tbody>';
          html += '<tr>';
          html += '<td class="text-secondary">2005:</td><td class="text-success">' + data.a2005 + '</td>';
          html += '<td class="text-secondary">2006:</td><td class="text-success">' + data.a2006 + '</td>';
          html += '<td class="text-secondary">2007:</td><td class="text-success">' + data.a2007 + '</td>';
          html += '</tr><tr>';
          html += '<td class="text-secondary">2008:</td><td class="text-success">' + data.a2008 + '</td>';
          html += '<td class="text-secondary">2009:</td><td class="text-success">' + data.a2009 + '</td>';
          html += '<td class="text-secondary">2010:</td><td class="text-success">' + data.a2010 + '</td>';
          html += '</tr><tr>';
          html += '<td class="text-secondary">2011:</td><td class="text-success">' + data.a2011 + '</td>';
          html += '<td class="text-secondary">2012:</td><td class="text-success">' + data.a2012 + '</td>';
          html += '<td class="text-secondary">2013:</td><td class="text-success">' + data.a2013 + '</td>';
          html += '</tr><tr>';
          html += '<td class="text-secondary">2014:</td><td class="text-success">' + data.a2014 + '</td>';
          html += '<td class="text-secondary">2015:</td><td class="text-success">' + data.a2015 + '</td>';
          html += '<td class="text-secondary">2016:</td><td class="text-success">' + data.a2016 + '</td>';
          html += '</tr><tr>';
          html += '<td class="text-secondary">2017:</td><td class="text-success">' + data.a2017 + '</td>';
          html += '<td class="text-secondary">2018:</td><td class="text-success">' + data.a2018 + '</td>';
          html += '<td class="text-secondary">2019:</td><td class="text-success">' + data.a2019 + '</td>';
          html += '</tr><tr>';
          html += '<td class="text-secondary">2020:</td><td class="text-success">' + data.a2020 + '</td>';
          html += '<td class="text-secondary">2021:</td><td class="text-success">' + data.a2021 + '</td>';
          html += '<td class="text-secondary">2022:</td><td class="text-success">' + data.a2022 + '</td>';
          html += '</tr></tbody></table></div>';
        }else if(urlData === 'col-data4.csv'){
          html += '<div class="modal-body"><table class="table text-left"><tbody>';
              html += '<tr>';
              html += '<td class="text-secondary">2000:</td><td class="text-success">' + data.a2000 + '</td>';
              html += '<td class="text-secondary">2001:</td><td class="text-success">' + data.a2001 + '</td>';
              html += '<td class="text-secondary">2002:</td><td class="text-success">' + data.a2002 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2003:</td><td class="text-success">' + data.a2003 + '</td>';
              html += '<td class="text-secondary">2004:</td><td class="text-success">' + data.a2004 + '</td>';
              html += '<td class="text-secondary">2005:</td><td class="text-success">' + data.a2005 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2006:</td><td class="text-success">' + data.a2006 + '</td>';
              html += '<td class="text-secondary">2007:</td><td class="text-success">' + data.a2007 + '</td>';
              html += '<td class="text-secondary">2008:</td><td class="text-success">' + data.a2008 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2009:</td><td class="text-success">' + data.a2009 + '</td>';
              html += '<td class="text-secondary">2010:</td><td class="text-success">' + data.a2010 + '</td>';
              html += '<td class="text-secondary">2011:</td><td class="text-success">' + data.a2011 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2012:</td><td class="text-success">' + data.a2012 + '</td>';
              html += '<td class="text-secondary">2013:</td><td class="text-success">' + data.a2013 + '</td>';
              html += '<td class="text-secondary">2014:</td><td class="text-success">' + data.a2014 + '</td>';
              html += '</tr><tr>';
              html += '<td class="text-secondary">2015:</td><td class="text-success">' + data.a2015 + '</td>';
              html += '<td class="text-secondary">2016:</td><td class="text-success">' + data.a2016 + '</td>';
              html += '</tr></tbody></table></div>';
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