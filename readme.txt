     __  _____________   _______   __________  ____  ______
    /  |/  / ____/ __ \ /  _/   | / ____/ __ \/ __ \/ ____/
   / /|_/ / __/ / / / / / // /| |/ /   / / / / /_/ / __/   
  / /  / / /___/ /_/ /_/ // ___ / /___/ /_/ / _, _/ /___   
 /_/  /_/_____/_____//___/_/  |_\____/\____/_/ |_/_____/   
                 eZ Publish/ezoe Extension 1.0 beta

[MediaCore](http://mediacore.com/) is an online video platform for managing, encoding, monetizing and delivering video to mobile and desktop devices. MediaCore makes it easy for any organization to share video either publicly or privately and build an amazing user experience on both desktop and mobile browsers around their own content. 

The MediaCore eZ Publish Extension creates a custom tag for your MediaCore videos, and gives you a button in the online editor that, when clicked, pops up a searchable listing of your videos. Choose which one you want to see, and we embed the custom tag into your content. It's simple.

== Installation ==

1) Copy this folder into /path/to/ezpublish/extension/

2) Edit "design/standard/javascript/plugins/mediacoreinsert/mediacore.php" and make sure your MediaCore URL ($mediacore_url) is changed from the demo account to your own.

3) Copy ezoe.ini.append.php from the settings folder into path/to/ezpublish/settings/override

4) In your site admin area, go to extensions and enable mediacoreinsert

5) Empty your caches.

6) Add some content; see the MediaCore button; click it. You're go to go!