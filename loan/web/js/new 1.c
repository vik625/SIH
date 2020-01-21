#include <stdio.h>
#include <stdlib.h>
struct Node{
	int data;
	struct Node* next;
}
void printlist(struct Node* n){
	while(n != NULL){
		printf("%d", &n->data);
		n=n->next;
	}
}
int main (){
	struct Node* head;
	struct Node* second;
	struct Node* third;
	
	head= (struct Node*)malloc(size of(struct Node*));
	second= (struct Node*)malloc(size of(struct Node*));
	third= (struct Node*)malloc(size of(struct Node*));
	
	head->data=1;
	head->next=second;
	
	second->data=2;
	second->next=third;
	
	third->data=3;
	third->next=NULL;
	
	printlist(head);
	
	return 0;
}