package pl.tomaszbuga.homemanagementapp.bill;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/bills")
public class BillController {
    private final BillService billService;

    @Autowired
    public BillController(BillService billService){
        this.billService = billService;
    }

    @GetMapping
    public List<Bill> listOfBills() {
        return billService.listOfBills();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void createBill(@RequestBody Bill bill){
        billService.createBill(bill);
    }

    @GetMapping("/{id}")
    public Bill getBillById(@PathVariable("id") Long id){
        return billService.getBillById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteBillById(@PathVariable("id") Long id){
        billService.deleteBillById(id);
    }

    @PutMapping("/{id}")
    public void setBillAsPayed(@PathVariable("id") Long id) {
        billService.setBillAsPayed(id);
    }
}
