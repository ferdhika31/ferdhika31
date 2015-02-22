---
layout: post
title: Membuat Sim Simi Dari PHP Code Igniter & MySQL
date: 2014-09-02 11:52:31
disqus: y
share: y
tags: PHP, CodeIgniter
lang: id
---
Selamat datang di postingan kedua saya. Pada tutorial ini, kita akan membuat web seperti sim simi. *Selamat menyimak*! <img alt="raising_hand" src="/images/emoji/raising_hand.png" class="emoji">

Pertamanya sih saya dapet kodingnya dari blognya mas Martabak Angus makasih ya mas, saya juga akan me repost postingannya.. <img alt="raising_hand" src="/images/emoji/laughing.png" class="emoji">
oh iya nih kalo yang belum tau sim simi saya akan menjelaskannya sedikit.. <img alt="raising_hand" src="/images/emoji/blush.png" class="emoji">

## Sim Simi

![show line numbers visual studio 2013](/images/simi/SimSimi.jpg "Sim Simi")

Simsimi adalah robot ayam yang dapat diajak untuk chat ketika anda sendirian. tapi siapa yang tahu bagaimana simsimi itu di kembangkan ?
dalam simsimi ada yang berkata simsimi itu robot ayam yang pintar, tapi ada juga yang berkata, ada orang yang jauh di sana mengontrol simsimi.
tapi yang benarnya, simsimi dibuat dengan bahasa java.
saya akan beri sedikit tentang, cara manusia berbicara dengan simsimi dengan CodeIgniter(PHP)


## Pembuatan Sim Simi
Oke setelah beberapa penjelasan, sekarang waktunya ngoding hehe <img alt="raising_hand" src="/images/emoji/laughing.png" class="emoji">

- **Buat tabel dalam database anda.** : 
{% highlight sql %}
CREATE TABLE kalimat (
id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
tanya TEXT,
jawab TEXT,
FULLTEXT (tanya)
)
ENGINE=MyISAM;
{% endhighlight %}
- **Isi data di tabel ** agar simsimi mengerti apa yang manusia katakan :
{% highlight sql %}
INSERT INTO kalimat (tanya,jawab) VALUES ('udah makan belum','udah kok');
{% endhighlight %}
- **Buat Controller Di CI** :
{% highlight php %}
<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
 
class Simi extends CI_Controller {
 
function __construct()
{	
parent:: __construct();
$this->gangerti = array('gue ga ngerti cok','lo ngomong naon cok','zz','ape si cok','ga ngarti dah','bahasa planet','ngomong ape si','lo manusia apa manusia','dasar !!','gue kaga ngarti','Ajarin dongse kata katanya :* ');
}
 
public function index()
{
header("Content-type: text/javascript");
$teks = $this->input->get('txt');
if($teks=="'" or $teks=='"'){ //menutupi bug
$teks = "Aku maho";
}
$teks = strtolower($teks);
$length = strlen($teks);
if($teks){
if($length>4){
$hasil = $this->db->query("SELECT * FROM kalimat WHERE MATCH(tanya) AGAINST('".$teks."' IN BOOLEAN MODE) ;");
}else{
$hasil = $this->db->query("SELECT * FROM kalimat WHERE tanya like '%".$teks."%' ;");
}
if($hasil->num_rows() > 0){
 
$cius = $hasil->result_array();
 
shuffle($cius);
 
$arr = array('tanya'=> $teks ,'respon' => $cius[0]['jawab']);
}else{
 
$cius = $this->gangerti;
 
shuffle($cius);
$arr = array('tanya'=> $teks ,'respon' => $cius[0]);
}
}else{
$arr = array('respon' => 'aduh textnya belum di ketik');	
}
echo json_encode($arr);
}
}
{% endhighlight %}


Selesai. Tinggal anda jalankan sesuai nama controllernya <img alt="raising_hand" src="/images/emoji/laughing.png" class="emoji">

## Penjelasan

Baik, saya sekarang akan menjelaskan sedikit tentang code di atas. 


1. **header()** : Untuk mengubah tipe header application web ke javascript, karena response nya berupa json (sbenernya gausah pake header() ini jg bisa si)
2. **strlower()** : Untuk mengubah karakter besar ke kecil agar dapat mudah di identifikasi.
3. **Queri Database** : Untuk SELECT * FROM vocab WHERE MATCH(ask) AGAINST(‘”.$teks.”’ IN BOOLEAN MODE) berarti bermaksud untuk mencari data ke tabel ask, karena full text mode bukan pake WHERE LIKE == REGEXP atau yang lain. karena menurut ane menggunakan MATCH() ….. AGAINST() kueri search nya lebih tajam dibanding LIKE %…% tapi pemrosesan data agag sedikit melamban daripada LIKE %…% (Saya sarankan memakai dua query ini) masing masing punya kelebihan dan kelemahan.
4. **shuffle()** : Untuk mengacak hasil row database jika lebih dari 1 row yang keluar maka akan di random, karena simsimi engga bego 1 kata jika ditanya maka harus diberi kata2 yang lain.
5. **json_encode()** : Untuk mengconvert array yang sudah di generate ke parse json, jadi powerfull untuk buat chat script pake javascript. rensonse nya tinggal pake ajax json 


untuk contoh vocab simsimi kita bisa kasih kata yang pendek aja, ngga usah panjang panjang seperti contoh row.
| udah makan belum | udah kok |
ketika kita beri pertanyaan "**kamu udah makan belum**" "**simsimi udah makan belum ya ?**" "**kamu udah makan ?**" maka mysql akan men-fetch row yang berhubungan dengan kata "**udah**" "**makan**" "**belum**"

Dan hasil nya akan seperti ini : 
![show line numbers project visual studio 2013](/images/simi/contoh_simi_dika_ganteng.png "Finnaly yeah")

>Untuk dokumentasi lanjutan mengenai FULL TEXT MySQL silahkan ke http://dev.mysql.com/doc/refman/5.0/en/fulltext-search.html

Demo & Download Contoh Project :

- **[Demo](http://curcol.ga)**
- **[Download Script](http://adf.ly/rzKcd)**

Jika Ada memiliki pertanyaan atau saran, silahkan tulis pada comment di bawah.
