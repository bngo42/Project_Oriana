var page_1 : GameObject;
var page_2 : GameObject;
var page_3 : GameObject;
var page_4 : GameObject;
var page_5 : GameObject;

var PosA : Transform;
var PosB : Transform;

function Start(){

	changePage(1);

}

function QuitGame()
{
	Application.Quit();
}

function StartGame(Level : int)
{
	Application.LoadLevel(Level);
}

function changePage(page : int)
{
	page_1.transform.position = PosB.transform.position;
	page_2.transform.position = PosB.transform.position;
	page_3.transform.position = PosB.transform.position;
	page_4.transform.position = PosB.transform.position;
	page_5.transform.position = PosB.transform.position;
	
	if (page == 1)
		page_1.transform.position = PosA.transform.position;
	if (page == 2)
		page_2.transform.position = PosA.transform.position;
	if (page == 3)
		page_3.transform.position = PosA.transform.position;
	if (page == 4)
		page_4.transform.position = PosA.transform.position;
	if (page == 5)
		page_5.transform.position = PosA.transform.position;
}