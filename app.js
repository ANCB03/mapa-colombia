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
            'C29': '#78FF00',
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
              html += '<tr><td class="text-secondary">Actividad Economica</td><td class="text-success">' + (data.act !== undefined ? data.act : 'Sin información') + '</td></tr>';
              if(geography.id === 'CUN'){
                html += '<tr><td class="text-secondary">Actividad Economica Bogotá</td><td class="text-danger">' + "Servicios financieros - Comercio - Sector manufacturero" + '</td></tr>';
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
              //->  data2
              if(geography.id === 'CUN'&&urlData === 'col-data2.csv'){
                var data = {
                  a2005: 89832,
                  a2006: 100462,
                  a2007: 112441,
                  a2008: 122101,
                  a2009: 130672,
                  a2010: 139740,
                  a2011: 152691,
                  a2012: 164542,
                  a2013: 177361,
                  a2014: 191026,
                  a2015: 206478,
                  a2016: 221456,
                  a2017: 236786,
                  a2018: 253941,
                  a2019: 273524,
                  a2020: 260747,
                  a2021: 303094,
                  a2022: 361698
                }
                
                
                html += '<h5 class="modal-title custom-modal-title" >Bogotá</h5>';
                html += '<table class="table text-left"><tbody>';
                
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
                html += '</tr>';
                
                html += '</tbody></table></div>';
                
                document.getElementById('modalBody').innerHTML = html;
                
              } 
              //data 3
              else if(geography.id === 'CUN'&&urlData === 'col-data3.csv'){
                var data = {
                  a2005: 26.6,
                  a2006: 26.3,
                  a2007: 26.2,
                  a2008: 25.6,
                  a2009: 26.1,
                  a2010: 25.7,
                  a2011: 24.7,
                  a2012: 24.7,
                  a2013: 24.8,
                  a2014: 25.0,
                  a2015: 25.7,
                  a2016: 25.6,
                  a2017: 25.7,
                  a2018: 25.7,
                  a2019: 25.8,
                  a2020: 26.1,
                  a2021: 25.4,
                  a2022: 24.6
                }
                
                
                html += '<h5 class="modal-title custom-modal-title" >Bogotá</h5>';
                html += '<table class="table text-left"><tbody>';
                
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
                html += '</tr>';
                
                html += '</tbody></table></div>';
                
                document.getElementById('modalBody').innerHTML = html;
                
              }
              
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

              if(geography.id === 'CUN'&&urlData === 'col-data4.csv'){
                var data = {
                  a2005: "8.768.847",
                  a2006: "9.451.064 ",
                  a2007: "10.200.334",
                  a2008: "11.017.314",
                  a2009: "12.171.889 ",
                  a2010: "13.245.097 ",
                  a2011: "14.552.751",
                  a2012: "16.027.709",
                  a2013: "17.225.871 ",
                  a2014: "18.200.597",
                  a2015: "19.036.278",
                  a2016: "20.447.644",
                  a2017: "21.600.918",
                  a2018: "22.847.360 ",
                  a2019: "24.194.259",
                  a2020: "25.932.558",
                  a2021: "27.563.656 ",
                  
                }

                	  	  	 	  	 	 	 	  	 
                
                
                html += '<h5 class="modal-title custom-modal-title" >Bogotá</h5>';
                html += '<table class="table text-left"><tbody>';
                
                html += '<tr>';
                html += '<td class="text-secondary">2000:</td><td class="text-success">' + data.a2005 + '</td>';
                html += '<td class="text-secondary">2001:</td><td class="text-success">' + data.a2006 + '</td>';
                html += '<td class="text-secondary">2002:</td><td class="text-success">' + data.a2007 + '</td>';
                html += '</tr><tr>';
                html += '<td class="text-secondary">2003:</td><td class="text-success">' + data.a2008 + '</td>';
                html += '<td class="text-secondary">2004:</td><td class="text-success">' + data.a2009 + '</td>';
                html += '<td class="text-secondary">2015:</td><td class="text-success">' + data.a2010 + '</td>';
                html += '</tr><tr>';
                html += '<td class="text-secondary">2006:</td><td class="text-success">' + data.a2011 + '</td>';
                html += '<td class="text-secondary">2007:</td><td class="text-success">' + data.a2012 + '</td>';
                html += '<td class="text-secondary">2008:</td><td class="text-success">' + data.a2013 + '</td>';
                html += '</tr><tr>';
                html += '<td class="text-secondary">2009:</td><td class="text-success">' + data.a2014 + '</td>';
                html += '<td class="text-secondary">2010:</td><td class="text-success">' + data.a2015 + '</td>';
                html += '<td class="text-secondary">2011:</td><td class="text-success">' + data.a2016 + '</td>';
                html += '</tr><tr>';
                html += '<td class="text-secondary">2012:</td><td class="text-success">' + data.a2017 + '</td>';
                html += '<td class="text-secondary">2013:</td><td class="text-success">' + data.a2018 + '</td>';
                html += '<td class="text-secondary">2014:</td><td class="text-success">' + data.a2019 + '</td>';
                html += '</tr><tr>';
                html += '<td class="text-secondary">2015:</td><td class="text-success">' + data.a2020 + '</td>';
                html += '<td class="text-secondary">2016:</td><td class="text-success">' + data.a2021 + '</td>';
    
                html += '</tr>';
                
                html += '</tbody></table></div>';
                
                document.getElementById('modalBody').innerHTML = html;
                
              }



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
          html += '<tr><td class="text-secondary">Actividad Economica</td><td class="text-danger">' + (data.act !== undefined ? data.act : 'Sin información') + '</td></tr>';
         
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

           if(geography.id === 'CUN'&&urlData === 'col-data2.csv'){
                var data = {
                  a2005: 89832,
                  a2006: 100462,
                  a2007: 112441,
                  a2008: 122101,
                  a2009: 130672,
                  a2010: 139740,
                  a2011: 152691,
                  a2012: 164542,
                  a2013: 177361,
                  a2014: 191026,
                  a2015: 206478,
                  a2016: 221456,
                  a2017: 236786,
                  a2018: 253941,
                  a2019: 273524,
                  a2020: 260747,
                  a2021: 303094,
                  a2022: 361698
                }
                
                
                html += '<h5 class="modal-title custom-modal-title" >Bogotá</h5>';
                html += '<table class="table text-left"><tbody>';
                
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
                html += '</tr>';
                
                html += '</tbody></table></div>';
                
                document.getElementById('modalBody').innerHTML = html;
                
              } 
              //data 3
              else if(geography.id === 'CUN'&&urlData === 'col-data3.csv'){
                var data = {
                  a2005: 26.6,
                  a2006: 26.3,
                  a2007: 26.2,
                  a2008: 25.6,
                  a2009: 26.1,
                  a2010: 25.7,
                  a2011: 24.7,
                  a2012: 24.7,
                  a2013: 24.8,
                  a2014: 25.0,
                  a2015: 25.7,
                  a2016: 25.6,
                  a2017: 25.7,
                  a2018: 25.7,
                  a2019: 25.8,
                  a2020: 26.1,
                  a2021: 25.4,
                  a2022: 24.6
                }
                
                
                html += '<h5 class="modal-title custom-modal-title" >Bogotá</h5>';
                html += '<table class="table text-left"><tbody>';
                
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
                html += '</tr>';
                
                html += '</tbody></table></div>';
                
                document.getElementById('modalBody').innerHTML = html;
                
              }



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

              if(geography.id === 'CUN'&&urlData === 'col-data4.csv'){
                var data = {
                  a2005: "8.768.847",
                  a2006: "9.451.064 ",
                  a2007: "10.200.334",
                  a2008: "11.017.314",
                  a2009: "12.171.889 ",
                  a2010: "13.245.097 ",
                  a2011: "14.552.751",
                  a2012: "16.027.709",
                  a2013: "17.225.871 ",
                  a2014: "18.200.597",
                  a2015: "19.036.278",
                  a2016: "20.447.644",
                  a2017: "21.600.918",
                  a2018: "22.847.360 ",
                  a2019: "24.194.259",
                  a2020: "25.932.558",
                  a2021: "27.563.656 ",
                  
                }

                	  	  	 	  	 	 	 	  	 
                
                
                html += '<h5 class="modal-title custom-modal-title" >Bogotá</h5>';
                html += '<table class="table text-left"><tbody>';
                
                html += '<tr>';
                html += '<td class="text-secondary">2000:</td><td class="text-success">' + data.a2005 + '</td>';
                html += '<td class="text-secondary">2001:</td><td class="text-success">' + data.a2006 + '</td>';
                html += '<td class="text-secondary">2002:</td><td class="text-success">' + data.a2007 + '</td>';
                html += '</tr><tr>';
                html += '<td class="text-secondary">2003:</td><td class="text-success">' + data.a2008 + '</td>';
                html += '<td class="text-secondary">2004:</td><td class="text-success">' + data.a2009 + '</td>';
                html += '<td class="text-secondary">2015:</td><td class="text-success">' + data.a2010 + '</td>';
                html += '</tr><tr>';
                html += '<td class="text-secondary">2006:</td><td class="text-success">' + data.a2011 + '</td>';
                html += '<td class="text-secondary">2007:</td><td class="text-success">' + data.a2012 + '</td>';
                html += '<td class="text-secondary">2008:</td><td class="text-success">' + data.a2013 + '</td>';
                html += '</tr><tr>';
                html += '<td class="text-secondary">2009:</td><td class="text-success">' + data.a2014 + '</td>';
                html += '<td class="text-secondary">2010:</td><td class="text-success">' + data.a2015 + '</td>';
                html += '<td class="text-secondary">2011:</td><td class="text-success">' + data.a2016 + '</td>';
                html += '</tr><tr>';
                html += '<td class="text-secondary">2012:</td><td class="text-success">' + data.a2017 + '</td>';
                html += '<td class="text-secondary">2013:</td><td class="text-success">' + data.a2018 + '</td>';
                html += '<td class="text-secondary">2014:</td><td class="text-success">' + data.a2019 + '</td>';
                html += '</tr><tr>';
                html += '<td class="text-secondary">2015:</td><td class="text-success">' + data.a2020 + '</td>';
                html += '<td class="text-secondary">2016:</td><td class="text-success">' + data.a2021 + '</td>';
    
                html += '</tr>';
                
                html += '</tbody></table></div>';
                
                document.getElementById('modalBody').innerHTML = html;
                
              }






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
  document.getElementById('mapaActual').innerText = 'Mapa - Actividades Economicas';
}

function PIBPreciosCorrientes(){
  mapaColombia('col-data2.csv');
  document.getElementById('mapaActual').innerText = 'Mapa - PIB Precios Corrientes';
}

function PIBPorcentaje(){
  mapaColombia('col-data3.csv');
  document.getElementById('mapaActual').innerText = 'Mapa - PIB Por Porcentaje';
}

function PIBPerCapital(){
  mapaColombia('col-data4.csv');
  document.getElementById('mapaActual').innerText = 'Mapa - PIB Per Capital';
}