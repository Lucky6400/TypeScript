abstract class ShippingItemsTemplate {
    shipItems(items: string[]): void {
        this.prepareItems(items);
        this.performShipment(items);
        this.onItemsShipped(items);
    }

    protected prepareItems(items: string[]): void {
        for (let item of items) {
            console.log(`${item} is being prepared.`);
        }
    }

    protected abstract performShipment(items: string[]): void;

    protected onItemsShipped(items: string[]): void {
        console.log(`${items} have been shipped.`);
    }
}

class AirShipment extends ShippingItemsTemplate {
    protected performShipment(items: string[]): void {
        console.log(`Shipment of ${items} by Air is being performed.`);
    }

    protected onItemsShipped(items: string[]): void {
        console.log(`Air Items shipped.`);
    }

}

class LandShipment extends ShippingItemsTemplate {
    protected performShipment(items: string[]): void {
        console.log(`Shipment of ${items} by Land is being performed.`);
    }

    protected onItemsShipped(items: string[]): void {
        console.log(`Land Items shipped`);
    }
}


const airShipment: ShippingItemsTemplate = new AirShipment();
const landShipment: ShippingItemsTemplate = new LandShipment();

// just for a video game 🙂
airShipment.shipItems(["Fighter Jets", "Armored Tanks"]);
landShipment.shipItems(["Assault Rifles", "Snipers"]);