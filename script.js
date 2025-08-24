const statusRef = document.querySelector(".status");

function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("VIP");

        }, 2000);
    });
}



function getVideo (subscriptionStatus) {
return new Promise ( (resolve, reject) => {

 if (subscriptionStatus === "VIP") {
    resolve("Show video")} 

 else if (subscriptionStatus === "FREE") {
    resolve("show trailer") } 

  else {
    reject("no video")} 
 
} )

}

async function main() {
    const status = await getSubscriptionStatus ();
    statusRef.innerHTML = status;
    console.log(getVideo(status))
}

main();



