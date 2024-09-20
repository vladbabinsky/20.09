class Appliance:
    def __init__(self, brand):
        self.brand = brand

    def get_info(self):
        return f"Brand: {self.brand}"

class KitchenAppliance(Appliance):
    def __init__(self, brand, power):
        super().__init__(brand)
        self.power = power

    def get_info(self):
        return f"Brand: {self.brand}, Power: {self.power} W"

class Oven(KitchenAppliance):
    def __init__(self, brand, power, temperature_range):
        super().__init__(brand, power)
        self.temperature_range = temperature_range

    def get_info(self):
        return f"Brand: {self.brand}, Power: {self.power} W, Temperature range: {self.temperature_range} degrees"

class Microwave(KitchenAppliance):
    def __init__(self, brand, power, capacity):
        super().__init__(brand, power)
        self.capacity = capacity

    def get_info(self):
        return f"Brand: {self.brand}, Power: {self.power} W, Capacity: {self.capacity} L"

oven = Oven("Whirlpool", 2500, "60-300")
microwave = Microwave("LG", 1000, 25)

print(oven.get_info())
print(microwave.get_info())
