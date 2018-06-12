---
layout: page
title: My Goal
---
{% highlight javascript %}
class Goal{
	public $name;
	public $stat;
	function __construct($name,$stat){
		$this->goalname = $name;
		$this->stat = $stat;
	}
	public function myGoal()
	{
		if($this->stat==TRUE){
			return "Alhamdulillah I've been able to be a ".$this->goalname."<br>";
		}else{
			return "I Want to be a ".$this->goalname."<br>";
		}
	}
	public function goalFramework()
	{
		if($this->stat==TRUE){
			return "Alhamdulillah I've been able to ".$this->goalname."<br>";
		}else{
			return "I Want to be able ".$this->goalname."<br>";
		}
	}
}
$dreamer = new Goal('Dreamer',true);
echo $dreamer->myGoal();
$programmer = new Goal('Programmer',false);
echo $programmer->myGoal();
$writer = new Goal('Writer',false);
echo $writer->myGoal();

echo "<hr>";

$ci = new Goal('Code Igniter',true);
echo $ci->goalFramework();
$artisan = new Goal('Laravel',false);
echo $artisan->goalFramework();
$yii = new Goal('Yes It Is',false);
echo $yii->goalFramework();
$zend = new Goal('Zend Framework',false);
echo $zend->goalFramework();
$cake = new Goal('Cake PHP',false);
echo $cake->goalFramework();
$grails = new Goal('Grails',true);
echo $grails->goalFramework();
$spring = new Goal('Spring',false);
echo $spring->goalFramework();
{% endhighlight %}

***
Haha sorry for bad code <img alt="raising_hand" src="/images/emoji/bowtie.png" class="emoji">