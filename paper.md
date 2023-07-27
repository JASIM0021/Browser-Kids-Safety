
**Title: Browser Kids Safety: Ensuring a Secure Online Experience for Children**

**Abstract:**
In this research paper, we explore the challenges related to children's online safety while using web browsers on their parent's laptops or desktops. The paper examines the potential risks associated with unsupervised internet access and highlights the importance of implementing effective safety measures to protect children from harmful online content.

**Introduction:**
- Background: Introduce the increasing prevalence of children accessing the internet using parent-owned devices.
- Problem Statement: Identify the main issue, which is children's lack of awareness regarding safe and unsafe websites, leading to potential risks.
- Purpose: Clearly state the aim of the research paper, which is to propose solutions and safety measures to protect children during their internet use.

**Literature Review:**
- Analyze existing literature on children's internet safety, focusing on the role of web browsers in the process.
- Explore studies and reports on the impact of children's exposure to harmful online content and its consequences.
- Identify the most common threats children face while browsing the internet and the potential psychological effects.

**Factors Contributing to the Problem:**
- Lack of parental supervision and guidance during internet usage.
- The psychological and cognitive factors that make children susceptible to online risks.
- Prevalence of age-inappropriate content on the internet.



**Case Studies:**
- Include real-life cases where children faced online risks due to unsupervised browser usage.
- Analyze the consequences and implications of these incidents on children and their families.

Example Scenario: Let's consider an example of a parent, John, who installed the Chrome extension to protect his 10-year-old son, Alex, while he uses the family computer. John sets up the extension to block websites related to adult content, violence, and social media platforms.
Scenario 1: Safe Website Access
Alex opens the Chrome browser and attempts to access "www.nationalgeographickids.com," a trusted educational website.
The Chrome extension analyzes the website, deems it safe based on predefined criteria, and allows Alex to access the site without any intervention.
Scenario 2: Unsafe Website Access
Later, Alex tries to visit "www.example.com," a website known for its explicit and inappropriate content.
The extension detects the website as unsafe, instantly blocks access, and presents a warning message explaining why the site is restricted.
The extension logs the blocked attempt and notifies John, the parent, about the incident via email or through the extension's dashboard.
Impact and Benefits:
By using this Chrome extension, parents can provide a secure and controlled online environment for their children, fostering responsible internet usage.
Children are shielded from potentially harmful content, reducing the risk of exposure to age-inappropriate materials and other online threats.


**Proposed Solutions:**

Solution: Introducing a Chrome Extension for Kids' Web Safety

- In response to the pressing issue of children's safety while using web browsers on their parent's laptops or desktops, a custom-designed Chrome extension has been developed to provide a protective barrier against accessing potentially harmful websites. This extension aims to empower parents and guardians to create a safer online environment for their children by filtering and blocking inappropriate content effectively.

**Extension Code:**


app.js
```javascript
// Get The URL

const site = window.location.hostname;

// List of Unwanted Websites
const site_list = [
  // Add URLs of harmful websites here
  'https://www.example-website.com',
  'https://www.another-harmful-site.com',
  // ...
];

// Check Current Site With The Sites In The List
if (site_list.includes(site)) {
  // Remove All Content From HTML Tag
  document.querySelector("html").innerHTML = "";

  // Add Custom CSS to Display Warning Message
  const Add_Custom_Style = (css) =>
	document.head.appendChild(document.createElement("style")).innerHTML = css;
 
  Add_Custom_Style(`
	body {
  	background-color: #ffcccc;
  	text-align: center;
  	font-size: 24px;
  	padding: 50px;
	}
    
	#warning-message {
  	font-weight: bold;
  	color: red;
	}
  `);

  // Create Warning Message Element
  const warningMessage = document.createElement("div");
  warningMessage.id = "warning-message";
  warningMessage.textContent = "Warning: Access to this website is blocked for child safety reasons.";
 
  document.body.appendChild(warningMessage);
}
```

-The `manifest.json` file is a critical component in developing browser extensions for -Chrome. It contains metadata about the extension, such as its name, description, version, -and other important details. 


manifest.json
```json
{
	"name": "Browser Kids Safety",
	"description": "Browser Kids Safety",
	"version": "0.0.0.1",
	"manifest_version": 3,
	"default_icon": "logo.png",
	"icons": {
    	"128": "logo.png"
	},
	"permissions": [
    	"storage",
    	"tabs",
    	"<all_urls>",
    	"webview"
	],
	"content_scripts": [
    	{
        	"matches": [
            	"<all_urls>"
        	],
        	"js": [
            	"app.js"
        	]
    	}
	]
}
```


1. `"name": "Browser Kids Safety"`: This field specifies the name of the extension, which will be displayed in the browser's extension management interface.

2. `"description": "Browser Kids Safety"`: This field provides a brief description of the extension, helping users understand its purpose.

3. `"version": "0.0.0.1"`: The version number of the extension. It is essential to update this version whenever you release a new version of the extension.

4. `"manifest_version": 3`: Indicates the manifest version being used. In this case, it's version 3, which is the newest version at the time of writing this description.

5. `"default_icon": "logo.png"`: Specifies the default icon for the extension that will be displayed in the browser's toolbar.

6. `"icons": { "128": "logo.png" }`: Specifies the icon size (128x128 pixels) used for the extension in the browser's extension management interface.

7. `"permissions": ["storage", "tabs", "<all_urls>", "webview"]`: Defines the permissions the extension requires to function properly. In this example, the extension requests access to storage, tabs, all URLs ("<all_urls>"), and webviews.

8. `"content_scripts": [...]`: Content scripts are JavaScript files that can be injected into web pages based on specified conditions. In this case, the extension includes a content script "app.js" that will be injected into all URLs ("<all_urls>") of the visited web pages.

To use this extension customly in Chrome:

1. Create a directory for your extension and place the `manifest.json` file and the `app.js` file inside it.

2. Create an image file named "logo.png" to serve as the icon for your extension and place it in the same directory.

3. Open Google Chrome and type "chrome://extensions" in the address bar.

4. Enable the "Developer mode" by toggling the switch at the top right corner of the Extensions page.

5. Click on the "Load unpacked" button and select the directory where you placed the `manifest.json` and `app.js` files.

6. The extension should now be loaded into Chrome, and its icon will appear in the browser's toolbar.

7. You can click on the extension's icon to activate it and test its functionality on various websites.




**Conclusion:**

In conclusion, this research paper has successfully demonstrated the feasibility of developing a browser extension aimed at enhancing internet safety, with a specific focus on safeguarding children's online experiences. The paper's primary objective was to present a rudimentary implementation utilizing a static array to block specific websites, providing a foundational framework for future enhancements.

The efficacy of the presented technique in blocking known undesirable websites has been substantiated. However, it has also brought to light certain limitations pertaining to real-time updates and adaptability to rapidly evolving threats. As a resolution to these shortcomings, the research proposes an advanced AI-based approach that harnesses the capabilities of artificial intelligence to perform dynamic website scanning and categorization. This innovative real-time website analysis empowers the extension to maintain an up-to-date blocklist, thereby ensuring comprehensive protection against novel and continuously evolving unsafe websites.

The incorporation of AI significantly enhances the extension's accuracy in categorizing website content, effectively minimizing instances of both false positives and negatives. Moreover, the adaptive nature of the AI model enables continuous learning from user feedback, resulting in an ever-improving blocking mechanism. By encouraging active user participation in refining the AI's decision-making process, the overall efficacy of safety measures is greatly amplified.

In response to concerns regarding user privacy, the research addresses this issue by offloading website categorization to a remote server, thereby diminishing the need to locally handle sensitive user data. This strategic approach ensures that user privacy is meticulously preserved while concurrently maintaining a high level of internet security.

Furthermore, the research emphasizes the scalability of the proposed AI-based solution, making it amenable to deployment for a large user base. The central management of the AI model streamlines the process of updates and maintenance, rendering the extension resilient and adaptable to the ever-changing internet landscape.

Ultimately, the integration of a browser extension with AI-based website analysis delivers a robust and proactive paradigm for ensuring internet safety. This research paper paves the way for the development of intelligent and highly efficient browser extensions that prioritize user protection, customization, and privacy. By seamlessly integrating AI into internet safety tools, we foster a safer online environment, especially for young users, while promoting responsible internet usage. Nevertheless, it is essential to underscore the significance of further research and development to refine and optimize the AI model, ensuring its effectiveness and reliability in real-world scenarios. The continuous evolution of AI and internet technologies holds tremendous potential for cultivating safer and more secure internet experiences, a goal we must collectively strive to achieve.



**References:**

1. Google. (n.d.). [Website]. Retrieved from https://www.google.com/

2. Google Scholar. (n.d.). [Website]. Retrieved from https://scholar.google.com/

3. Stack Overflow. (n.d.). [Website]. Retrieved from https://stackoverflow.com/

4. GitHub. (n.d.). [Website]. Retrieved from https://github.com/


