Windows Setup Instructions
The instructions in this note will show how to install Node using NVM (Node Version Manager) to reduce the chance of errors and permissions issues. NVM is now recommended by the NPM community to install and manage your Node environment.

Installing Node with NVM
Important - Uninstall any existing versions of Node.js before installing NVM for Windows (otherwise, you'll have conflicting versions).

Install NVM Windows
Visit the official NVM Windows repository releases page:
https://github.com/coreybutler/nvm-windows/releases
Scroll down to Assets and click nvm.setup.zip to download the current release:


After the file downloads, extract the zip file and run the nvm-setup.exe installer. If you get a Windows prompt about the app, click Install anyway:


Open your Terminal as Admin

After installation has successfully completed open your Terminal as an Administrator (we are showing GitBash here, however, you can use your terminal of choice such as PowerShell).


Test that NVM is working
In your terminal, type nvm. It should output some information on how to use NVM similar to below:


Install the LTS version of Node
This course will require the use of the latest LTS release of Node which is currently v16. Node v17 is not recommended as it is still not widely supported.
To install the needed version of Node, run the following command in your terminal:
nvm install 16


Set your Node version
After installing a version of Node you need to tell NVM to use it.
In your terminal run nvm list


Note the v16 version found in the list (yours may be newer or older, it's fine as long as it is a v16 release)
In our case, this was 16.14.2, so, we will run nvm use 16.14.2

Check your Node version
Make sure your Node version is set correctly by running in your terminal node -v. It should print the version you just told NVM to use above.


Bundler Not Launching Automatically in Browser?
The newest versions of Expo do not open a browser window automatically after running npm start. You can scan the QR Code from inside the terminal. If you need, you can CMD/CTL click the link to the localhost address that the bundler is running on to open it manually (your port may be different).

Important Note - You may find that the "Developer Tools running on" line is missing and are not able to access the bundler in the browser. Instead of running npm start, run expo start. You should see the "Developer Tools running on http://localhost:19002" message. If you see "Logs for your project will appear below" in your terminal, then, hit enter. After this, the bundler will be accessible by visiting the address in the browser.




Using iOS and Android Simulators
published 1-23-2020

These instructions are for students who wish to use the XCode or Android Studio simulators instead of a physical device with Expo.

keep in mind, emulators require a lot of RAM, so you may find that bundling and displaying code takes much longer than when using a physical device.

The official Expo docs with some troubleshooting tips are available here:

https://docs.expo.io/versions/latest/workflow/ios-simulator/

https://docs.expo.io/versions/latest/workflow/android-studio-emulator/

macOS
XCode iOS Simulator

Download the full version of Xcode from the App Store. This is a huge file at around 7GB, so it can take a LONG time to download and install. It might seem like it it is stuck and not installing, but it is probably not.

Launch XCode and agree to its terms. It will start installing more tools and software

Eventually, you will get a "Welcome to XCode" screen

In the top menu bar, click "XCode", then "Preferences" and then "Locations".

Make sure that the "Command Line Tools" are installed and selected.

In the top menu bar, click XCode, then "Open Developer Tool" then click "Simulator"

This will open an iPhone simulator on your machine. If everything is working well, it should load a generic screen with a few apps.

Go to your terminal and in your React Native project directory, run npm start

When the Metro Bundler opens up in your browser, click on the option in the left sidebar to “Run on iOS simulator”

If you navigate back to your iPhone simulator you should see an “Open In Expo” button. Click Open.

This will launch the Expo application in the simulated device and run your bundled code. Eventually, it should load the “Hi There!” screen.

Android Studio Simulator

Install Android Studio: https://developer.android.com/studio

After downloading, run the installer.

A dialog box should pop up. Do not Import Settings, Just Click "Ok"

Click “Next" to go thru the Wizard

Click “Next” to do a Standard install

Choose light or dark theme for your editor and click “Next”

Click “Finish”

You will likely get a dialog box pop and say “HAXM Installation wants to make changes”. Enter your password and click OK

If you get a “System Extension Blocked” error, follow the prompt to Open Security Preferences and click “Allow” for “Intel Corporation Apps”

Once the HAXM installer finished you should get a dialog box from Android Studio.

Click “AVD Manager”

Click “Create New Virtual Device”

Select a Device from the list and click “Next”

If the System Image for the most recent SDK is not installed, you will need to click the "Download" link next to the SDK version.

After the image has been downloaded, click “Next”

Preview the settings and then click “Finish”

You should see the newly created device in the “Your Virtual Device” screen.

Click the Play ▶️button all the way to the right in the "Actions" column.

This will open an Android simulator on your machine. If everything is working well, it should load a generic screen with a few apps.

Go to your terminal and in your React Native project directory, run npm start

When the Metro Bundler opens up in your browser, click on the option to “Run on Android simulator”

If you navigate back to your Android simulator you might see a “Permit Drawing Over Other Apps” message. Click the OK button and it should take you to the system settings screen to enable this. You will likely have to go back to the Metro Bundler and select “Run on Android simulator” again.

This will launch the Expo application in the simulated device and run your bundled code. Eventually, it should load the “Hi There!” screen.

Windows
ios Simulator

Unfortunately, you cannot run iOS simulators on Windows. You can, however, use a physical iOS device running Expo with your Windows machine.

Android Studio Simulator

Make sure Virtualization is enabled in your BIOS. Also, note, your processor must support HAXM. If it does not (which is common with many AMD or non-Intel machines) you will likely not be able to run the simulators. HAXM will also conflict with the Hyper-V Manager if it is enabled.

Install Android Studio: https://developer.android.com/studio

After Downloading run the installer.

Click “Next" to go through the installer wizard.

Click “Next” on Choose Components screen

Click “Next” on the Configuration Settings screen

Click “Install”

After completion click “Next”

Click “Finish”

In the next dialog box that pops up, do not Import settings, Just Click "Ok"

Click “Next" to go thru the Wizard

Click “Next” to do a Standard install

Choose light or dark theme for your editor and click “Next”

Click “Finish”

Once the HAXM installer finishes you should get a dialog box from Android Studio.

Click “AVD Manager”

Click “Create New Virtual Device”

Select a Device from the list and click “Next”

If the System Image for the most recent SDK is not installed, you will need to click the "Download" link next to the SDK version.

After the image has been downloaded, click “Next”

Preview the settings and then click “Finish”

You should see the newly created device in the “Your Virtual Device” screen.

Click the Play ▶️button all the way to the right in the "Actions" column.

This will open an Android simulator on your machine. If everything is working well, it should load a generic screen with a few apps.

Go to your terminal and in your React Native project directory, run npm start

When the Metro Bundler opens up in your browser, click on the option to “Run on Android simulator”. If it does not open in your browser, you may need to go to localhost:19002 in your browser.

If you navigate back to your Android simulator you might see a “Permit Drawing Over Other Apps” message. Click the OK button and it should take you to the system settings screen to enable this. You will likely have to back to the Metro Bundler and select “Run on Android simulator” again.

This will launch the Expo application in the simulated device and run your bundled code. Eventually, it should load the “Hi There!” screen.
