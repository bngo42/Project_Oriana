var rb : Rigidbody2D;
var Speed = 0.2;
var jumpForce = 0.0;
private var Grounded = true;
var distToGround = 0.01;
var scale;

var rayPos : Vector2;

function Start()
{
	rb = GetComponent.<Rigidbody2D>();
	scale = this.transform.localScale.x;
}

function Update () {
	
	isGrounded();
	LookingSide();

	if (Input.GetButtonDown("Sprint_Player1"))
		Speed = 0.24;
	if (Input.GetButtonUp("Sprint_Player1"))
		Speed = 0.08;
	if (Input.GetButton("Horizontal_Player1"))
		this.transform.position.x += Mathf.Clamp(Input.GetAxis("Horizontal_Player1"), -Speed, Speed);
	if (Input.GetButton("Jump_Player1") && Grounded)
	{
		rb.velocity = new Vector2(0,jumpForce);
		Grounded = false;
	}
}

function isGrounded()
{
	Debug.DrawRay(this.transform.position + rayPos, -Vector2.up);
	if (Physics2D.Raycast(this.transform.position + rayPos, -Vector2.up, distToGround))
		Grounded = true;
}


function LookingSide()
{
	if (Input.GetAxis("Horizontal_Player1") < 0)
		this.transform.localScale.x = -scale;
	else if (Input.GetAxis("Horizontal_Player1") > 0)
		this.transform.localScale.x = scale;
}