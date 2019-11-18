export default class TagId {
    constructor (TagType, Length, Flag, RSSI, Battery, Temperature, Remove, Id) {
        this.TagType = TagType;
        this.Length = Length;
        this.Flag = Flag;
        this.RSSI = RSSI;
        this.Battery = Battery;
        this.Temperature = Temperature;
        this.Remove = Remove;
        this.Id = Id;
    }
}