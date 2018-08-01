/*

Nach dem man npm install redux & npm install react-redux ausgeführt hat geht es los.


--Den Store erstellen--

Zuerst erstellt du eine Store Datei welche den Zustand aller Componente Verwaltet z.b.:
MeinStore.js

In dieser Datei importierst du den store von redux:
import {createStore} from 'redux';

Dann erstellst du einen initialen Zustand welches ein oder mehrere Objekte beinhaltet
und übergibst diesem Objekt/Objekte einen Wert:
export const initialState = {
    farbe: 'green'
};


Im Store importieren wir auch den reducer den wir erstellt haben aus der Datei MeinReducer.js:
import { reducer } from './MeinReducer';

Jetzt erstellen wir ein Objekt mit dem Namen store und 
übergeben diesem die createStore Funktion von Redux, diese enthalten zusätzlich
den reducer und den initialState:
export const store = createStore(reducer, initialState);


--Den Reducer erstellen z.b. MeinReducer.js--

Als erstes importieren wir den initialenState aus der Datei MeinStore.js:
import {initialState} from './MeinStore';


Dann erstellen wir einen reducer, dieser beinhaltet den Zustand & die action,
dem Zustand wird der initialeState übergeben, mit Switch geben wir die jeweiligen Einstellungen
weiter und zum Schluß
wird nochmal der state zurückgegeben:
 export const reducer = (state = initialState, action) => {
	switch (action.type) {
    
			case "CHANGE_COLOR":
					return {
							...state,
							farbe: "blue"
					};

			case "CHANGE_COLORinRED":
					return {
							...state,
							farbe: "red"
					};
			

			default:
					return state
	}
}


--Die Action erstellen z.b. MeineActions.js--

wir erstellen ein actionCreator diesen übergeben wir später der connenct Funktion, 
den type benötigen wir um Ihn mit dem reducer zu verbinden:
export const actionCreators = { 
	nameOffTheAction: (event) => {
		return {type: "CHANGE_COLOR"};
	},

	nameOffTheActionZwei: (event) => {
		return {type: "CHANGE_COLORinRED"};
	}
	
	
}


--Den Provider in die index.js u. da in die ReactDom einfügen--

Zuerst muss man den Provider von React Redux importieren:
import {Provider} from 'react-redux';

Dann in die DOM einfügen und den store festlegen:
ReactDOM.render(
<Provider store={store}>
<AppContainer />
</Provider>
, document.getElementById('root'));
registerServiceWorker();



--Daten aus dem Redux Store extrahieren und in die Container Componente über die Props einfügen u.
actionCreators importieren--

Zuerst muss  ich connect von React Redux importieren, danach die actionCreators:
import {connect} from 'react-redux';
import {actionCreators} from './MeineActions';



Dann erzeugt man eine neue Componente und übergibt dieser dann die Funktion connect mit mapStateToProps u. actionCreators & App:
export const AppContainer = connect(mapStateToProps, actionCreators)(App);
WICHTIG: Diese müssen wir in der index.js Datei einfügen:
<Provider store={store}>
<AppContainer />
</Provider>


Dann erstellen wir eine Funktion mapStateToProps, diese holt sich den gesamten Zustand aus
dem Redux Store u. gibt einen Teil zurück:
 function mapStateToProps (state) {

    return {farbe: state.farbe};
}


--Einfügen der Props in die Anwendung mit dem initialenState--
<h2 style={{color:this.props.farbe}}>
            Das ist der aktuelle Zustand</h2>


Und dann importieren wir die props in die Events:
<button style={{margin: 20}}
            onClick={this.props.nameOffTheAction}
            >Ändere die Farbe mit Redux
</button>

<button style={{margin: 20}}
            onClick={this.props.nameOffTheActionZwei}
            >Ändere die Farbe mit Redux
</button>

*/
